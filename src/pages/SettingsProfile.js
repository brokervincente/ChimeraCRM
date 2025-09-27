import React, { useState, useEffect } from 'react';

const SettingsProfile = ({ agencyData, onSave }) => {
  const [form, setForm] = useState({
    title: '',
    contacts: '',
    logoUrl: '',
    logoCircular: false,
  });

  useEffect(() => {
    if (agencyData) setForm(agencyData);
  }, [agencyData]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleLogoUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setForm((prev) => ({ ...prev, logoUrl: reader.result }));
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(form);
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Profilo Agenzia</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Titolo Agenzia</label>
          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="Titolo agenzia"
          />
        </div>
        <div>
          <label>Recapiti</label>
          <textarea
            name="contacts"
            value={form.contacts}
            onChange={handleChange}
            placeholder="Indirizzo, telefono, email, ecc."
          />
        </div>
        <div>
          <label>Logo Agenzia (quadrato o circolare)</label>
          <input type="file" accept="image/*" onChange={handleLogoUpload} />
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              name="logoCircular"
              checked={form.logoCircular}
              onChange={handleChange}
            />
            Logo Circolare
          </label>
        </div>
        {form.logoUrl && (
          <div style={{ marginTop: 10 }}>
            <img
              src={form.logoUrl}
              alt="Preview Logo"
              style={{
                width: 100,
                height: 100,
                borderRadius: form.logoCircular ? '50%' : '8px',
                objectFit: 'cover',
              }}
            />
          </div>
        )}
        <button type="submit" style={{ marginTop: 20 }}>Salva</button>
      </form>
    </div>
  );
};

export default SettingsProfile;
