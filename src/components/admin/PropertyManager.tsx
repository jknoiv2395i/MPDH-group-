import React, { useState } from 'react';
import { useProperties } from '../../hooks/useProperties';
import { PropertyCategory, PropertyItem } from '../../shared/schema';
import PropertyEditor from './PropertyEditor';
import { Trash2, Edit, Plus, Building2, Home, Factory, KeyRound, Store } from 'lucide-react';

const CATEGORIES: { key: PropertyCategory; label: string; icon: React.ReactNode; color: string }[] = [
  { key: 'residential',        label: 'Residential (Purchase)', icon: <Home className="w-4 h-4" />,     color: '#16a34a' },
  { key: 'residential-rental', label: 'Residential Rental',     icon: <KeyRound className="w-4 h-4" />, color: '#2563eb' },
  { key: 'commercial',         label: 'Commercial (Purchase)',  icon: <Store className="w-4 h-4" />,    color: '#9333ea' },
  { key: 'commercial-rental',  label: 'Commercial Rental',      icon: <Building2 className="w-4 h-4" />,color: '#db2777' },
  { key: 'industrial',         label: 'Industrial',              icon: <Factory className="w-4 h-4" />,  color: '#ea580c' },
];

export default function PropertyManager() {
  const { properties, getByCategory, deleteProperty } = useProperties();
  const [activeCategory, setActiveCategory] = useState<PropertyCategory>('residential');
  const [editingProperty, setEditingProperty] = useState<PropertyItem | null>(null);
  const [isCreating, setIsCreating] = useState(false);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const token = localStorage.getItem('admin_token') || '';
  const filtered = getByCategory(activeCategory);

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this property?')) return;
    setDeletingId(id);
    try {
      await deleteProperty(id, token);
    } catch (err) {
      alert('Failed to delete property');
    } finally {
      setDeletingId(null);
    }
  };

  // If editing or creating, show the editor
  if (editingProperty || isCreating) {
    return (
      <PropertyEditor
        property={editingProperty}
        category={activeCategory}
        onClose={() => { setEditingProperty(null); setIsCreating(false); }}
      />
    );
  }

  return (
    <div>
      {/* Header row */}
      <div style={{ marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
        <Building2 style={{ width: '20px', height: '20px', color: '#888' }} />
        <span style={{ fontSize: '13px', color: '#888', fontWeight: 600 }}>MANAGE PROPERTY LISTINGS</span>
      </div>

      {/* Category Tabs */}
      <div style={{
        display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '24px',
        borderBottom: '2px solid #f0f0f0', paddingBottom: '12px'
      }}>
        {CATEGORIES.map(cat => {
          const isActive = activeCategory === cat.key;
          return (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              style={{
                display: 'flex', alignItems: 'center', gap: '8px',
                padding: '10px 16px', borderRadius: '8px', border: isActive ? 'none' : '1px solid #e5e7eb',
                background: isActive ? cat.color : '#fff',
                color: isActive ? '#fff' : '#555',
                cursor: 'pointer', fontWeight: 600, fontSize: '13px',
                transition: 'all 0.2s', boxShadow: isActive ? '0 2px 8px rgba(0,0,0,0.15)' : 'none'
              }}
            >
              {cat.icon}
              {cat.label}
              <span style={{
                background: isActive ? 'rgba(255,255,255,0.25)' : '#f0f0f0',
                padding: '2px 8px', borderRadius: '12px', fontSize: '12px',
                marginLeft: '2px', fontWeight: 700
              }}>
                {getByCategory(cat.key).length}
              </span>
            </button>
          );
        })}
      </div>

      {/* Add Property Button */}
      <button
        onClick={() => setIsCreating(true)}
        style={{
          display: 'flex', alignItems: 'center', gap: '8px',
          padding: '12px 24px', borderRadius: '10px', border: '2px dashed #ccc',
          background: '#fafafa', cursor: 'pointer', fontWeight: 600,
          fontSize: '15px', color: '#555', width: '100%', justifyContent: 'center',
          marginBottom: '24px', transition: 'all 0.2s'
        }}
        onMouseOver={e => { (e.target as HTMLElement).style.borderColor = '#131313'; (e.target as HTMLElement).style.color = '#131313'; }}
        onMouseOut={e => { (e.target as HTMLElement).style.borderColor = '#ccc'; (e.target as HTMLElement).style.color = '#555'; }}
      >
        <Plus className="w-5 h-5" />
        Add New {CATEGORIES.find(c => c.key === activeCategory)?.label} Property
      </button>

      {/* Properties List */}
      {filtered.length === 0 ? (
        <div style={{
          textAlign: 'center', padding: '60px 20px', color: '#999',
          background: '#fafafa', borderRadius: '12px', border: '1px solid #eee'
        }}>
          <Building2 style={{ width: '48px', height: '48px', margin: '0 auto 16px', opacity: 0.3 }} />
          <p style={{ fontSize: '16px', fontWeight: 600 }}>No properties yet</p>
          <p style={{ fontSize: '14px' }}>Click "Add New" to create your first listing</p>
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {filtered.map(property => (
            <div
              key={property.id}
              style={{
                display: 'flex', alignItems: 'center', gap: '16px',
                padding: '16px', borderRadius: '12px', border: '1px solid #eee',
                background: '#fff', transition: 'box-shadow 0.2s'
              }}
              onMouseOver={e => (e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,0,0,0.08)')}
              onMouseOut={e => (e.currentTarget.style.boxShadow = 'none')}
            >
              {/* Thumbnail */}
              <div style={{
                width: '80px', height: '60px', borderRadius: '8px', overflow: 'hidden',
                flexShrink: 0, background: '#f0f0f0'
              }}>
                {property.images.length > 0 ? (
                  <img src={property.images[0]} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                ) : (
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                    <Building2 style={{ width: '24px', height: '24px', color: '#ccc' }} />
                  </div>
                )}
              </div>

              {/* Info */}
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontWeight: 600, fontSize: '15px', color: '#131313', marginBottom: '4px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                  {property.title}
                </div>
                <div style={{ fontSize: '13px', color: '#777', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                  <span>📍 {property.location}</span>
                  <span>💰 {property.price}</span>
                  <span>📐 {property.superArea}</span>
                </div>
              </div>

              {/* Actions */}
              <div style={{ display: 'flex', gap: '8px', flexShrink: 0 }}>
                <button
                  onClick={() => setEditingProperty(property)}
                  style={{
                    display: 'flex', alignItems: 'center', gap: '6px',
                    padding: '8px 16px', borderRadius: '8px', border: '1px solid #ddd',
                    background: '#fff', cursor: 'pointer', fontSize: '13px',
                    fontWeight: 500, color: '#333'
                  }}
                >
                  <Edit className="w-4 h-4" /> Edit
                </button>
                <button
                  onClick={() => handleDelete(property.id)}
                  disabled={deletingId === property.id}
                  style={{
                    display: 'flex', alignItems: 'center', gap: '6px',
                    padding: '8px 16px', borderRadius: '8px', border: '1px solid #fecaca',
                    background: deletingId === property.id ? '#fef2f2' : '#fff',
                    cursor: 'pointer', fontSize: '13px', fontWeight: 500, color: '#dc2626'
                  }}
                >
                  <Trash2 className="w-4 h-4" />
                  {deletingId === property.id ? 'Deleting...' : 'Delete'}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
