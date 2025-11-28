import React from 'react';

export default function RegionSelector({ data, selectedRegion, selectedCountry, onRegionChange, onCountryChange }) {
    const regions = Object.keys(data);
    const countries = selectedRegion ? Object.keys(data[selectedRegion]) : [];

    return (
        <div className="card" style={{
            background: 'linear-gradient(135deg, #ffffff 0%, rgba(255, 255, 255, 0.98) 100%)',
            border: '2px solid rgba(59, 130, 246, 0.15)',
            padding: '3rem'
        }}>
            <div style={{ marginBottom: '2rem' }}>
                <h2 style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    fontSize: '2.5rem',
                    marginBottom: '0.75rem'
                }}>
                    <span style={{ fontSize: '2.2em' }}>📍</span>
                    Where are you traveling?
                </h2>
                <p style={{
                    color: 'var(--text-secondary)',
                    fontSize: '1.1rem',
                    margin: 0
                }}>
                    Select your destination to find the best ride-hailing options
                </p>
            </div>

            <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '2rem',
                marginTop: '2rem'
            }}>
                {/* Region Selection */}
                <div>
                    <label style={{
                        display: 'block',
                        marginBottom: '1rem',
                        fontWeight: '700',
                        color: 'var(--text-primary)',
                        fontSize: '1.1rem'
                    }}>
                        🌍 Region
                    </label>
                    <div style={{
                        display: 'grid',
                        gap: '1rem'
                    }}>
                        {regions.map(region => (
                            <button
                                key={region}
                                onClick={() => onRegionChange(region)}
                                style={{
                                    padding: '1.25rem 1.5rem',
                                    background: selectedRegion === region
                                        ? 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)'
                                        : 'rgba(59, 130, 246, 0.05)',
                                    color: selectedRegion === region ? 'white' : 'var(--text-primary)',
                                    border: selectedRegion === region
                                        ? '2px solid var(--primary-color)'
                                        : '2px solid rgba(59, 130, 246, 0.2)',
                                    borderRadius: '12px',
                                    cursor: 'pointer',
                                    fontSize: '1rem',
                                    fontWeight: '700',
                                    transition: 'all 0.3s',
                                    textAlign: 'left'
                                }}
                                onMouseEnter={(e) => {
                                    if (selectedRegion !== region) {
                                        e.target.style.background = 'rgba(59, 130, 246, 0.1)';
                                        e.target.style.borderColor = 'rgba(59, 130, 246, 0.4)';
                                        e.target.style.transform = 'translateY(-2px)';
                                    }
                                }}
                                onMouseLeave={(e) => {
                                    if (selectedRegion !== region) {
                                        e.target.style.background = 'rgba(59, 130, 246, 0.05)';
                                        e.target.style.borderColor = 'rgba(59, 130, 246, 0.2)';
                                        e.target.style.transform = 'translateY(0)';
                                    }
                                }}
                            >
                                {region}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Country Selection */}
                <div style={{
                    animation: selectedRegion ? 'slideIn 0.3s ease-out' : 'none'
                }}>
                    <label style={{
                        display: 'block',
                        marginBottom: '1rem',
                        fontWeight: '700',
                        color: 'var(--text-primary)',
                        fontSize: '1.1rem'
                    }}>
                        🏙️ Country
                    </label>
                    {selectedRegion ? (
                        <div style={{
                            display: 'grid',
                            gap: '1rem'
                        }}>
                            {countries.map(country => (
                                <button
                                    key={country}
                                    onClick={() => onCountryChange(country)}
                                    style={{
                                        padding: '1.25rem 1.5rem',
                                        background: selectedCountry === country
                                            ? 'linear-gradient(135deg, #10b981 0%, #059669 100%)'
                                            : 'rgba(16, 185, 129, 0.05)',
                                        color: selectedCountry === country ? 'white' : 'var(--text-primary)',
                                        border: selectedCountry === country
                                            ? '2px solid var(--success-color)'
                                            : '2px solid rgba(16, 185, 129, 0.2)',
                                        borderRadius: '12px',
                                        cursor: 'pointer',
                                        fontSize: '1rem',
                                        fontWeight: '700',
                                        transition: 'all 0.3s',
                                        textAlign: 'left'
                                    }}
                                    onMouseEnter={(e) => {
                                        if (selectedCountry !== country) {
                                            e.target.style.background = 'rgba(16, 185, 129, 0.1)';
                                            e.target.style.borderColor = 'rgba(16, 185, 129, 0.4)';
                                            e.target.style.transform = 'translateY(-2px)';
                                        }
                                    }}
                                    onMouseLeave={(e) => {
                                        if (selectedCountry !== country) {
                                            e.target.style.background = 'rgba(16, 185, 129, 0.05)';
                                            e.target.style.borderColor = 'rgba(16, 185, 129, 0.2)';
                                            e.target.style.transform = 'translateY(0)';
                                        }
                                    }}
                                >
                                    {country}
                                </button>
                            ))}
                        </div>
                    ) : (
                        <div style={{
                            padding: '2rem',
                            background: 'rgba(59, 130, 246, 0.05)',
                            borderRadius: '12px',
                            textAlign: 'center',
                            color: 'var(--text-secondary)',
                            border: '2px dashed rgba(59, 130, 246, 0.2)'
                        }}>
                            <p style={{ fontSize: '0.95rem' }}>Select a region first →</p>
                        </div>
                    )}
                </div>
            </div>

            <style>{`
                @keyframes slideIn {
                    from {
                        opacity: 0;
                        transform: translateY(-10px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            `}</style>
        </div>
    );
}
