import React, { useState } from 'react';

export default function FareEstimator({ currency }) {
    const [distance, setDistance] = useState('');
    const [estimatedCost, setEstimatedCost] = useState(null);

    const calculateFare = () => {
        if (!distance) return;
        const baseFare = 2.0;
        const ratePerKm = 1.5;
        const surge = 1 + (Math.random() * 0.2);
        const cost = (baseFare + (parseFloat(distance) * ratePerKm)) * surge;
        setEstimatedCost(cost.toFixed(2));
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            calculateFare();
        }
    };

    return (
        <div className="card" style={{ animation: 'fadeInUp 0.5s ease-out 0.1s both' }}>
            <h2 style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '2.2rem' }}>
                <span style={{ fontSize: '1.8em' }}>💰</span>
                Fare Estimator
            </h2>
            <p style={{
                fontSize: '0.9rem',
                color: 'var(--text-secondary)',
                marginBottom: '1.5rem',
                marginTop: '0.5rem'
            }}>
                Estimate your trip cost based on average local rates.
            </p>
            <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr auto',
                gap: '1.5rem',
                marginBottom: '2rem'
            }}>
                <div>
                    <label style={{
                        display: 'block',
                        marginBottom: '0.75rem',
                        fontWeight: '700',
                        fontSize: '1.05rem'
                    }}>
                        Distance (km)
                    </label>
                    <input
                        type="number"
                        placeholder="Enter distance"
                        value={distance}
                        onChange={(e) => setDistance(e.target.value)}
                        onKeyPress={handleKeyPress}
                        style={{ marginBottom: 0 }}
                    />
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-end' }}>
                    <button onClick={calculateFare} style={{ width: '100%', padding: '1rem' }}>
                        <span>🔍</span>
                        Calculate
                    </button>
                </div>
            </div>

            {estimatedCost && (
                <div style={{
                    background: 'linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%)',
                    padding: '2rem',
                    borderRadius: '12px',
                    textAlign: 'center',
                    border: '1px solid #6ee7b7',
                    animation: 'slideInUp 0.4s ease-out'
                }}>
                    <div style={{
                        fontSize: '0.85rem',
                        textTransform: 'uppercase',
                        letterSpacing: '1.5px',
                        color: '#047857',
                        fontWeight: '700',
                        marginBottom: '0.75rem'
                    }}>
                        💵 Estimated Fare
                    </div>
                    <div style={{
                        fontSize: '2.5rem',
                        fontWeight: '800',
                        color: '#10b981',
                        letterSpacing: '-1px'
                    }}>
                        {estimatedCost}
                    </div>
                    <div style={{
                        fontSize: '1rem',
                        color: '#047857',
                        fontWeight: '600',
                        marginTop: '0.5rem'
                    }}>
                        {currency || 'USD'}
                    </div>
                    <p style={{
                        fontSize: '0.85rem',
                        color: '#06b6d4',
                        marginTop: '1rem',
                        fontStyle: 'italic'
                    }}>
                        Prices may vary due to traffic and demand
                    </p>
                </div>
            )}
            <style>{`
                @keyframes slideInUp {
                    from {
                        opacity: 0;
                        transform: translateY(15px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
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
