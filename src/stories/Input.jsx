import PropTypes from 'prop-types';

export const Input = ({ label, placeholder, disabled }) => {
  const inputId = `input-${label.toLowerCase().replace(/\s+/g, '-')}`;

  return (
    <label
      style={{
        display: 'grid',
        gap: '0.5rem',
        fontFamily: "'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif",
        fontSize: '14px',
        fontWeight: 700,
        color: '#1f2937',
      }}
      htmlFor={inputId}
    >
      {label}
      <input
        id={inputId}
        type="text"
        placeholder={placeholder}
        disabled={disabled}
        style={{
          minWidth: '280px',
          padding: '0.8rem 0.95rem',
          borderRadius: '14px',
          border: '1px solid #cbd5e1',
          backgroundColor: disabled ? '#e2e8f0' : '#ffffff',
          color: '#0f172a',
          font: 'inherit',
          outline: 'none',
        }}
      />
    </label>
  );
};

Input.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
};

Input.defaultProps = {
  label: 'Label',
  placeholder: 'Enter a value',
  disabled: false,
};
