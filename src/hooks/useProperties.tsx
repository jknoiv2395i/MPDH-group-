import React, { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react';
import { PropertyItem, PropertyCategory } from '../shared/schema';

interface PropertiesContextType {
  properties: PropertyItem[];
  loading: boolean;
  getByCategory: (category: PropertyCategory) => PropertyItem[];
  addProperty: (property: Omit<PropertyItem, 'id' | 'createdAt'>, token: string) => Promise<PropertyItem>;
  updateProperty: (id: string, updates: Partial<PropertyItem>, token: string) => Promise<PropertyItem>;
  deleteProperty: (id: string, token: string) => Promise<void>;
  uploadFiles: (files: File[], token: string) => Promise<string[]>;
  refetch: () => Promise<void>;
}

const PropertiesContext = createContext<PropertiesContextType | null>(null);

export function PropertiesProvider({ children }: { children: ReactNode }) {
  const [properties, setProperties] = useState<PropertyItem[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchProperties = useCallback(async () => {
    try {
      const res = await fetch('/api/properties');
      if (res.ok) {
        const data = await res.json();
        setProperties(data);
      }
    } catch (err) {
      console.error('Failed to fetch properties:', err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchProperties();
  }, [fetchProperties]);

  const getByCategory = useCallback((category: PropertyCategory) => {
    return properties.filter(p => p.category === category);
  }, [properties]);

  const addProperty = useCallback(async (property: Omit<PropertyItem, 'id' | 'createdAt'>, token: string): Promise<PropertyItem> => {
    const res = await fetch('/api/properties', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
      body: JSON.stringify(property)
    });
    if (!res.ok) throw new Error('Failed to create property');
    const newProp = await res.json();
    setProperties(prev => [...prev, newProp]);
    return newProp;
  }, []);

  const updateProperty = useCallback(async (id: string, updates: Partial<PropertyItem>, token: string): Promise<PropertyItem> => {
    const res = await fetch(`/api/properties/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
      body: JSON.stringify(updates)
    });
    if (!res.ok) throw new Error('Failed to update property');
    const updated = await res.json();
    setProperties(prev => prev.map(p => p.id === id ? updated : p));
    return updated;
  }, []);

  const deleteProperty = useCallback(async (id: string, token: string): Promise<void> => {
    const res = await fetch(`/api/properties/${id}`, {
      method: 'DELETE',
      headers: { Authorization: `Bearer ${token}` }
    });
    if (!res.ok) throw new Error('Failed to delete property');
    setProperties(prev => prev.filter(p => p.id !== id));
  }, []);

  const uploadFiles = useCallback(async (files: File[], token: string): Promise<string[]> => {
    const formData = new FormData();
    files.forEach(f => formData.append('files', f));
    const res = await fetch('/api/upload', {
      method: 'POST',
      headers: { Authorization: `Bearer ${token}` },
      body: formData
    });
    if (!res.ok) throw new Error('Failed to upload files');
    const data = await res.json();
    return data.urls;
  }, []);

  return (
    <PropertiesContext.Provider value={{
      properties, loading, getByCategory,
      addProperty, updateProperty, deleteProperty,
      uploadFiles, refetch: fetchProperties
    }}>
      {children}
    </PropertiesContext.Provider>
  );
}

export function useProperties() {
  const ctx = useContext(PropertiesContext);
  if (!ctx) throw new Error('useProperties must be used within PropertiesProvider');
  return ctx;
}
