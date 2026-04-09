function ItemCount({
  value,
  onDecrement,
  onIncrement,
  min = 1,
  className = '',
  buttonClassName = 'btn-outline',
  valueClassName = 'btn-ghost',
  ariaLabelDecrement = 'Disminuir cantidad',
  ariaLabelIncrement = 'Aumentar cantidad'
}) {
  const isDecrementDisabled = value <= min

  return (
    <div className={`join ${className}`.trim()}>
      <button
        type="button"
        className={`btn join-item ${buttonClassName}`.trim()}
        onClick={onDecrement}
        disabled={isDecrementDisabled}
        aria-label={ariaLabelDecrement}
      >
        -
      </button>

      <span className={`btn join-item pointer-events-none ${valueClassName}`.trim()}>
        {value}
      </span>

      <button
        type="button"
        className={`btn join-item ${buttonClassName}`.trim()}
        onClick={onIncrement}
        aria-label={ariaLabelIncrement}
      >
        +
      </button>
    </div>
  )
}

export default ItemCount