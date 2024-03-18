import {
  ChangeEventHandler,
  FocusEventHandler,
  MouseEventHandler,
  ReactNode,
  useRef,
  useMemo,
  forwardRef,
  ForwardedRef,
  useImperativeHandle,
  Ref,
  KeyboardEventHandler,
} from 'react'
import classNames from 'classnames'
import styles from './BaseInput.module.scss'

export type InputType =
  | 'text'
  | 'email'
  | 'tel'
  | 'number'
  | 'password'
  | 'search'
  | 'url'

export interface BaseInputProps<Type extends InputType> {
  className?: string
  inputClassName?: string
  id?: string
  type?: Type
  error?: boolean
  blocked?: boolean
  placeholder?: string
  prefix?: ReactNode
  postfix?: ReactNode
  value?: Type extends 'number' ? number | null : string | null
  onChange?: (
    val: Type extends 'number' ? number | null : string | null,
  ) => void
  onClick?: MouseEventHandler<HTMLDivElement>
  onFocus?: FocusEventHandler<HTMLInputElement>
  onBlur?: FocusEventHandler<HTMLInputElement>
  onKeyPress?: KeyboardEventHandler<HTMLInputElement>
}

/*
TODO: can work wrong in case
      <Input<'number'> onChange={val => {// val here is not a string}} />
      do not specify type as a generic - use type prop!
*/

// TODO: password

const BaseInput = <Type extends InputType = 'text'>(
  {
    className,
    inputClassName,
    id,
    type: baseType,
    error: hasError,
    blocked: isBlocked,
    placeholder,
    prefix,
    postfix,
    value,
    onChange: baseOnChange,
    onClick: baseOnClick,
    onFocus,
    onBlur,
    onKeyPress: baseOnKeyPress,
  }: BaseInputProps<Type>,
  ref: ForwardedRef<HTMLInputElement>,
) => {
  const inputRef = useRef<HTMLInputElement | null>(null)

  useImperativeHandle(ref, () => inputRef.current!)

  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const val = e.target.value
    if (val === '') {
      baseOnChange?.(null)
    } else if (type === 'number') {
      baseOnChange?.(+val as Type extends 'number' ? number : string)
    } else {
      baseOnChange?.(val as Type extends 'number' ? number : string)
    }
  }

  const onKeyDown: KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.code === 'Escape') {
      ;(e.target as HTMLInputElement).blur()
      e.stopPropagation()
    }
    baseOnKeyPress?.(e)
  }

  const onClick: MouseEventHandler<HTMLDivElement> = (e) => {
    if (inputRef.current && e.target !== inputRef.current) {
      inputRef.current.focus()
    }
    baseOnClick?.(e)
  }

  const type = useMemo(
    () => (baseType === 'number' ? 'text' : baseType),
    [baseType],
  )

  const mode = useMemo(
    () => (baseType === 'number' ? 'numeric' : undefined),
    [baseType],
  )

  const pattern = useMemo(
    () => (baseType === 'number' ? '-?[0-9]*(.[0-9]+)?' : undefined),
    [baseType],
  )

  const valueAsProp = useMemo(
    () =>
      value === null ||
      Number.isNaN(value) ||
      (value === undefined && baseOnChange)
        ? ''
        : value,
    [value],
  )

  return (
    <div
      className={classNames(styles.container, className, {
        [styles.error]: hasError,
      })}
      onClick={onClick}
    >
      {prefix}
      <input
        className={classNames(styles.input, inputClassName)}
        ref={inputRef}
        id={id}
        placeholder={placeholder}
        type={type}
        inputMode={mode}
        pattern={pattern}
        value={valueAsProp}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        onKeyDown={onKeyDown}
        disabled={isBlocked}
      />
      {postfix}
    </div>
  )
}

export default (() => forwardRef(BaseInput))() as <
  Type extends InputType = 'text',
>(
  props: BaseInputProps<Type> & {
    ref?: Ref<HTMLInputElement>
  },
) => ReactNode
