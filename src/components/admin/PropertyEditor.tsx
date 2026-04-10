import React, { useState, useRef } from 'react';
import { useProperties } from '../../hooks/useProperties';
import { PropertyItem, PropertyCategory } from '../../shared/schema';
import { ArrowLeft, Upload, X, Image as ImageIcon, Video, Save } from 'lucide-react';

interface Props {
  property: PropertyItem | null; // null = creating new
  category: PropertyCategory;
  onClose: () => void;
}

export default function PropertyEditor({ property, category, onClose }: Props) {
  const { addProperty, updateProperty, uploadFiles } = useProperties();
  const token = localStorage.getItem('admin_token') || '';
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [form, setForm] = useState({
    title: property?.title || '',
    location: property?.location || '',
    superArea: property?.superArea || '',
    price: property?.price || '',
    status: property?.status || 'Ready to Move',
    transaction: property?.transaction || 'New',
    description: property?.description || '',
    category: property?.category || category,
    images: property?.images || [] as string[],
    videos: property?.videos || [] as string[],
  });

  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (field: string, value: string) => {
    setForm(prev => ({ ...prev, [field]: value }));
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (files.length === 0) return;

    setUploading(true);
    setError('');
    try {
      const urls = await uploadFiles(files, token);
      // Separate images and videos
      const imageUrls: string[] = [];
      const videoUrls: string[] = [];
      files.forEach((file, i) => {
        if (file.type.startsWith('video/')) {
          videoUrls.push(urls[i]);
        } else {
          imageUrls.push(urls[i]);
        }
      });
      setForm(prev => ({
        ...prev,
        images: [...prev.images, ...imageUrls],
        videos: [...prev.videos, ...videoUrls],
      }));
    } catch (err) {
      setError('Failed to upload files. Please try again.');
    } finally {
      setUploading(false);
      if (fileInputRef.current) fileInputRef.current.value = '';
    }
  };

  const removeImage = (index: number) => {
    setForm(prev => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index)
    }));
  };

  const removeVideo = (index: number) => {
    setForm(prev => ({
      ...prev,
      videos: prev.videos.filter((_, i) => i !== index)
    }));
  };

  const handleSave = async () => {
    if (!form.title.trim()) {
      setError('Title is required');
      return;
    }
    setSaving(true);
    setError('');
    try {
      if (property) {
        await updateProperty(property.id, form, token);
      } else {
        await addProperty(form, token);
      }
      onClose();
    } catch (err) {
      setError('Failed to save property. Please try again.');
    } finally {
      setSaving(false);
    }
  };

  const inputStyle: React.CSSProperties = {
    width: '100%', padding: '10px 14px', borderRadius: '8px',
    border: '1px solid #ddd', fontSize: '14px', outline: 'none',
    transition: 'border-color 0.2s', fontFamily: 'inherit',
    boxSizing: 'border-box'
  };

  const labelStyle: React.CSSProperties = {
    display: 'block', fontWeight: 600, fontSize: '13px',
    color: '#555', marginBottom: '6px', textTransform: 'uppercase',
    letterSpacing: '0.5px'
  };

  return (
    <div>
      {/* Header */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: '12px',
        marginBottom: '24px', paddingBottom: '16px', borderBottom: '2px solid #f0f0f0'
      }}>
        <button
          onClick={onClose}
          style={{
            display: 'flex', alignItems: 'center', padding: '8px',
            borderRadius: '8px', border: '1px solid #ddd', background: '#fff',
            cursor: 'pointer'
          }}
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <h2 style={{ fontSize: '20px', fontWeight: 700, margin: 0 }}>
          {property ? 'Edit Property' : 'Add New Property'}
        </h2>
      </div>

      {error && (
        <div style={{
          padding: '12px 16px', borderRadius: '8px', background: '#fef2f2',
          color: '#dc2626', fontSize: '14px', marginBottom: '20px', border: '1px solid #fecaca'
        }}>
          {error}
        </div>
      )}

      {/* Form */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
        {/* Title - full width */}
        <div style={{ gridColumn: '1 / -1' }}>
          <label style={labelStyle}>Property Title *</label>
          <input
            style={inputStyle}
            value={form.title}
            onChange={e => handleChange('title', e.target.value)}
            placeholder="e.g. 3BHK Luxury Apartment for Sale"
          />
        </div>

        {/* Location */}
        <div>
          <label style={labelStyle}>Location</label>
          <input
            style={inputStyle}
            value={form.location}
            onChange={e => handleChange('location', e.target.value)}
            placeholder="e.g. KT Nagar, Nagpur"
          />
        </div>

        {/* Price */}
        <div>
          <label style={labelStyle}>Price</label>
          <input
            style={inputStyle}
            value={form.price}
            onChange={e => handleChange('price', e.target.value)}
            placeholder="e.g. ₹45 Lakh or ₹15,000/month"
          />
        </div>

        {/* Super Area */}
        <div>
          <label style={labelStyle}>Super Area / Size</label>
          <input
            style={inputStyle}
            value={form.superArea}
            onChange={e => handleChange('superArea', e.target.value)}
            placeholder="e.g. 2 BHK 1200 Sqft"
          />
        </div>

        {/* Status */}
        <div>
          <label style={labelStyle}>Status</label>
          <select
            style={inputStyle}
            value={form.status}
            onChange={e => handleChange('status', e.target.value)}
          >
            <option value="Ready to Move">Ready to Move</option>
            <option value="Under Construction">Under Construction</option>
            <option value="Available">Available</option>
            <option value="Upcoming">Upcoming</option>
          </select>
        </div>

        {/* Transaction */}
        <div>
          <label style={labelStyle}>Transaction Type</label>
          <select
            style={inputStyle}
            value={form.transaction}
            onChange={e => handleChange('transaction', e.target.value)}
          >
            <option value="New">New</option>
            <option value="Resale">Resale</option>
            <option value="Rent">Rent</option>
            <option value="Lease">Lease</option>
            <option value="Service">Service</option>
          </select>
        </div>

        {/* Category */}
        <div>
          <label style={labelStyle}>Category / Section</label>
          <select
            style={inputStyle}
            value={form.category}
            onChange={e => handleChange('category', e.target.value)}
          >
            <option value="residential">Residential (Purchase)</option>
            <option value="residential-rental">Residential Rental</option>
            <option value="commercial">Commercial (Purchase)</option>
            <option value="commercial-rental">Commercial Rental</option>
            <option value="industrial">Industrial</option>
          </select>
        </div>

        {/* Description - full width */}
        <div style={{ gridColumn: '1 / -1' }}>
          <label style={labelStyle}>Description</label>
          <textarea
            style={{ ...inputStyle, minHeight: '100px', resize: 'vertical' }}
            value={form.description}
            onChange={e => handleChange('description', e.target.value)}
            placeholder="Property description, amenities, features..."
          />
        </div>

        {/* Media Upload Zone - full width */}
        <div style={{ gridColumn: '1 / -1' }}>
          <label style={labelStyle}>Images & Videos</label>

          {/* Upload area */}
          <div
            onClick={() => fileInputRef.current?.click()}
            style={{
              border: '2px dashed #ccc', borderRadius: '12px', padding: '32px',
              textAlign: 'center', cursor: 'pointer', background: '#fafafa',
              transition: 'all 0.2s', marginBottom: '16px'
            }}
            onMouseOver={e => { (e.currentTarget.style.borderColor = '#131313'); (e.currentTarget.style.background = '#f5f5f5'); }}
            onMouseOut={e => { (e.currentTarget.style.borderColor = '#ccc'); (e.currentTarget.style.background = '#fafafa'); }}
          >
            <Upload style={{ width: '32px', height: '32px', color: '#999', margin: '0 auto 8px' }} />
            <p style={{ margin: 0, fontWeight: 600, color: '#555', fontSize: '15px' }}>
              {uploading ? 'Uploading...' : 'Click to upload images or videos'}
            </p>
            <p style={{ margin: '4px 0 0', color: '#999', fontSize: '13px' }}>
              JPG, PNG, WebP, MP4 — up to 50MB each
            </p>
          </div>
          <input
            ref={fileInputRef}
            type="file"
            multiple
            accept="image/*,video/*"
            onChange={handleFileUpload}
            style={{ display: 'none' }}
          />

          {/* Image previews */}
          {form.images.length > 0 && (
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px' }}>
                <ImageIcon style={{ width: '16px', height: '16px', color: '#777' }} />
                <span style={{ fontSize: '13px', fontWeight: 600, color: '#777' }}>
                  Images ({form.images.length})
                </span>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {form.images.map((url, i) => (
                  <div key={i} style={{ position: 'relative', width: '100px', height: '75px', borderRadius: '8px', overflow: 'hidden', border: '1px solid #eee' }}>
                    <img src={url} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    <button
                      onClick={() => removeImage(i)}
                      style={{
                        position: 'absolute', top: '4px', right: '4px',
                        width: '22px', height: '22px', borderRadius: '50%',
                        background: 'rgba(0,0,0,0.6)', border: 'none', cursor: 'pointer',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        padding: 0
                      }}
                    >
                      <X style={{ width: '12px', height: '12px', color: '#fff' }} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Video previews */}
          {form.videos.length > 0 && (
            <div style={{ marginTop: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px' }}>
                <Video style={{ width: '16px', height: '16px', color: '#777' }} />
                <span style={{ fontSize: '13px', fontWeight: 600, color: '#777' }}>
                  Videos ({form.videos.length})
                </span>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {form.videos.map((url, i) => (
                  <div key={i} style={{
                    position: 'relative', width: '160px', height: '90px',
                    borderRadius: '8px', overflow: 'hidden', border: '1px solid #eee',
                    background: '#000'
                  }}>
                    <video src={url} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    <button
                      onClick={() => removeVideo(i)}
                      style={{
                        position: 'absolute', top: '4px', right: '4px',
                        width: '22px', height: '22px', borderRadius: '50%',
                        background: 'rgba(0,0,0,0.6)', border: 'none', cursor: 'pointer',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        padding: 0
                      }}
                    >
                      <X style={{ width: '12px', height: '12px', color: '#fff' }} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Save / Cancel Buttons */}
      <div style={{
        display: 'flex', gap: '12px', justifyContent: 'flex-end',
        marginTop: '32px', paddingTop: '20px', borderTop: '2px solid #f0f0f0'
      }}>
        <button
          onClick={onClose}
          style={{
            padding: '12px 28px', borderRadius: '10px', border: '1px solid #ddd',
            background: '#fff', cursor: 'pointer', fontWeight: 600, fontSize: '15px',
            color: '#555'
          }}
        >
          Cancel
        </button>
        <button
          onClick={handleSave}
          disabled={saving}
          style={{
            display: 'flex', alignItems: 'center', gap: '8px',
            padding: '12px 28px', borderRadius: '10px', border: 'none',
            background: saving ? '#888' : '#131313', color: '#fff',
            cursor: saving ? 'not-allowed' : 'pointer',
            fontWeight: 600, fontSize: '15px'
          }}
        >
          <Save className="w-4 h-4" />
          {saving ? 'Saving...' : (property ? 'Update Property' : 'Create Property')}
        </button>
      </div>
    </div>
  );
}
