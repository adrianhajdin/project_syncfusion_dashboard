import React from 'react';

const Button = (props) => {
  const {
    state,
    setState,
    icon,
    dotColor,
    bgColor,
    color,
    bgHoverColor,
    size,
    text,
    borderRadius,
    width,
  } = props;

  return (
    <button
      onClick={(prevState) => setState(!prevState)}
      style={{ backgroundColor: bgColor, color }}
      className={`relative text-${size} rounded-${borderRadius} p-3 w-${width} hover:drop-shadow-xl hover:bg-${bgHoverColor}`}
    >
      <span
        style={{ background: dotColor }}
        className='absolute inline-flex rounded-full h-2 w-2 right-2 top-2'
      />
      {icon}
      {text}
    </button>
  );
};

export default Button;
