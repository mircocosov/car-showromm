import { ReactNode } from 'react'
import { useControlValue } from '@/lib/control-value'
import { FormError } from '@/lib/form-error'
import classNames from 'classnames'
import ControlContainer from '@/components/ui/ControlContainer'
import BaseButton from '@/components/ui/BaseButton'
import styles from './Radio.module.scss'

interface Props {
  className?: string
  value?: boolean
  postscript?: string
  error?: FormError | boolean
  children?: ReactNode
  onChange?: (val: boolean) => void
}

export default function Radio({
  className,
  value: baseValue,
  postscript,
  error,
  children,
  onChange: baseOnChange,
}: Props) {
  // TODO: ref - for react hook form

  const { value, onChange } = useControlValue({
    baseValue,
    baseOnChange,
    transformBaseValue: (val) => val ?? false,
    transformValue: (val) => val,
  })

  return (
    <ControlContainer
      className={classNames(className, styles.container, {
        [styles.active]: value,
        [styles.error]: error,
      })}
      postscript={postscript}
      error={typeof error !== 'boolean' ? error : undefined}
    >
      <div className={styles.main} onClick={() => onChange(!value)}>
        <BaseButton className={styles.radio} />
        {children}
      </div>
    </ControlContainer>
  )
}
