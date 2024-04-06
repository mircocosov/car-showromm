import { ForwardedRef, ReactNode, Ref, forwardRef, useId, useMemo } from 'react'
import { FormError } from '@/lib/form-error'
import BaseInput, { BaseInputProps, InputType } from '@/components/ui/BaseInput'
import ControlContainer from '@/components/ui/ControlContainer'

interface Props<Type extends InputType>
  extends Omit<BaseInputProps<Type>, 'error'> {
  className?: string
  label?: string
  postscript?: string
  error?: FormError
}

const Input = <Type extends InputType = 'text'>(
  { className, label, postscript, error, ...baseInputProps }: Props<Type>,
  ref: ForwardedRef<HTMLInputElement>,
) => {
  const defaultInputId = useId()

  const inputId = useMemo(
    () => baseInputProps.id ?? defaultInputId,
    [baseInputProps.id],
  )

  return (
    <ControlContainer
      className={className}
      controlId={inputId}
      label={label}
      postscript={postscript}
      error={error}
    >
      <BaseInput {...baseInputProps} ref={ref} id={inputId} error={!!error} />
    </ControlContainer>
  )
}

export default (() => forwardRef(Input))() as <Type extends InputType = 'text'>(
  props: Props<Type> & {
    ref?: Ref<HTMLInputElement>
  },
) => ReactNode
