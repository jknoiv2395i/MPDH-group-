import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { SiteContent, defaultContent } from '../shared/schema';
import { toast } from 'sonner';

interface ContentContextType {
  content: SiteContent;
  loading: boolean;
  updateContent: (newContent: SiteContent) => Promise<boolean>;
}

const ContentContext = createContext<ContentContextType>({
  content: defaultContent,
  loading: true,
  updateContent: async () => false,
});

export const ContentProvider = ({ children }: { children: ReactNode }) => {
  const [content, setContent] = useState<SiteContent>(defaultContent);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/content')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch content');
        return res.json();
      })
      .then((data) => {
        if (data && data.home) { // basic validation
          setContent(data);
        }
      })
      .catch((err) => {
        console.error('Failed to load content, using defaults:', err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const updateContent = async (newContent: SiteContent): Promise<boolean> => {
    const token = localStorage.getItem('admin_token');
    if (!token) {
      toast.error('Unauthorized. Please log in again.');
      return false;
    }

    try {
      const response = await fetch('/api/content', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(newContent),
      });

      if (!response.ok) {
        throw new Error('Update failed');
      }

      setContent(newContent);
      toast.success('Changes saved successfully!');
      return true;
    } catch (error) {
      console.error('Error updating content:', error);
      toast.error('Failed to save changes. Please try again.');
      return false;
    }
  };

  return (
    <ContentContext.Provider value={{ content, loading, updateContent }}>
      {children}
    </ContentContext.Provider>
  );
};

export const useContent = () => useContext(ContentContext);
