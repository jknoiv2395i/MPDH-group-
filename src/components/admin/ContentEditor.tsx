import React, { useState, useEffect } from 'react';
import { useContent } from '../../hooks/useContent';
import { SiteContent } from '../../shared/schema';

const ContentEditor = () => {
  const { content, loading, updateContent } = useContent();
  const [formData, setFormData] = useState<SiteContent | null>(null);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    if (!loading && content) {
      setFormData(content);
    }
  }, [content, loading]);

  const handleChange = (section: keyof SiteContent, field: string, value: string) => {
    if (!formData) return;
    setFormData({
      ...formData,
      [section]: {
        ...formData[section],
        [field]: value
      }
    });
  };

  const handleSave = async () => {
    if (!formData) return;
    setIsSaving(true);
    await updateContent(formData);
    setIsSaving(false);
  };

  if (loading || !formData) {
    return <div className="p-8 text-center">Loading editor...</div>;
  }

  const renderInput = (section: keyof SiteContent, field: string, label: string, isTextarea = false) => {
    const value = (formData as any)[section][field];
    return (
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
        {isTextarea ? (
          <textarea
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={4}
            value={value}
            onChange={(e) => handleChange(section, field, e.target.value)}
          />
        ) : (
          <input
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={value}
            onChange={(e) => handleChange(section, field, e.target.value)}
          />
        )}
      </div>
    );
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex justify-between items-center mb-8 sticky top-0 bg-white/90 backdrop-blur-sm z-10 py-4 border-b border-gray-200">
        <h2 className="text-2xl font-bold text-gray-800">Site Content Editor</h2>
        <button
          onClick={handleSave}
          disabled={isSaving}
          className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 transition-colors"
        >
          {isSaving ? 'Saving...' : 'Save Changes'}
        </button>
      </div>

      <div className="space-y-8">
        <section className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-xl font-semibold mb-4 text-gray-800 border-b pb-2">Home Page</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {renderInput('home', 'heroTitle', 'Hero Title')}
            {renderInput('home', 'heroSubtitle', 'Hero Subtitle')}
            {renderInput('home', 'servicesTitle', 'Services Section Title')}
            {renderInput('home', 'consultationTitle', 'Consultation Title')}
            {renderInput('home', 'consultationSubtitle', 'Consultation Subtitle', true)}
            {renderInput('home', 'visionTitle', 'Vision Title', true)}
            {renderInput('home', 'visionSubtitle', 'Vision Subtitle', true)}
            {renderInput('home', 'commitmentTitle', 'Commitment Title', true)}
            {renderInput('home', 'commitmentDescription', 'Commitment Description', true)}
          </div>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-xl font-semibold mb-4 text-gray-800 border-b pb-2">Client Logos (Work With Section)</h3>
          <div className="space-y-4">
            {(formData?.home?.clientLogos || []).map((logo, index) => (
              <div key={index} className="flex gap-4 items-end border-b pb-4">
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Client Name</label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    value={logo.name}
                    onChange={(e) => {
                      const newLogos = [...(formData?.home?.clientLogos || [])];
                      newLogos[index].name = e.target.value;
                      setFormData({ ...formData!, home: { ...formData!.home, clientLogos: newLogos } });
                    }}
                  />
                </div>
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Logo URL</label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    value={logo.src}
                    onChange={(e) => {
                      const newLogos = [...(formData?.home?.clientLogos || [])];
                      newLogos[index].src = e.target.value;
                      setFormData({ ...formData!, home: { ...formData!.home, clientLogos: newLogos } });
                    }}
                  />
                </div>
                <button
                  onClick={() => {
                    const newLogos = formData.home.clientLogos.filter((_, i) => i !== index);
                    setFormData({ ...formData, home: { ...formData.home, clientLogos: newLogos } });
                  }}
                  className="px-3 py-2 bg-red-50 text-red-600 rounded-md hover:bg-red-100"
                >
                  Remove
                </button>
              </div>
            ))}
            <button
              onClick={() => {
                const newLogos = [...(formData?.home?.clientLogos || []), { name: '', src: '' }];
                setFormData({ ...formData!, home: { ...formData!.home, clientLogos: newLogos } });
              }}
              className="w-full py-2 border-2 border-dashed border-gray-300 rounded-md text-gray-500 hover:bg-gray-50"
            >
              + Add New Client Logo
            </button>
          </div>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-xl font-semibold mb-4 text-gray-800 border-b pb-2">Contact Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {renderInput('contact', 'phone', 'Phone Number')}
            {renderInput('contact', 'email', 'Email Address')}
            <div className="md:col-span-2">
              {renderInput('contact', 'address', 'Physical Address', true)}
            </div>
            {renderInput('contact', 'facebook', 'Facebook URL')}
            {renderInput('contact', 'twitter', 'Twitter URL')}
            {renderInput('contact', 'instagram', 'Instagram URL')}
            {renderInput('contact', 'linkedin', 'LinkedIn URL')}
          </div>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-xl font-semibold mb-4 text-gray-800 border-b pb-2">About Page</h3>
          <div className="grid grid-cols-1 gap-4">
            {renderInput('about', 'title', 'Page Title')}
            {renderInput('about', 'description', 'Description / Summary', true)}
            {renderInput('about', 'mission', 'Mission Statement', true)}
            {renderInput('about', 'vision', 'Vision Statement', true)}
          </div>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-xl font-semibold mb-4 text-gray-800 border-b pb-2">Footer</h3>
          <div className="grid grid-cols-1 gap-4">
            {renderInput('footer', 'description', 'Footer Description', true)}
            {renderInput('footer', 'copyright', 'Copyright Text')}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ContentEditor;
