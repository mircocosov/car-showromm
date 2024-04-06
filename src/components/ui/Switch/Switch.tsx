import { ReactNode } from 'react'
import { FormError } from '@/lib/form-error'
import { useControlValue } from '@/lib/control-value'
import classNames from 'classnames'
import ControlContainer from '@/components/ui/ControlContainer'
import styles from './Switch.module.scss'

interface Props {
  className?: string
  postscript?: string
  error?: FormError
  value?: boolean
  children?: ReactNode
  onChange?: (val: boolean) => void
}

export default function Switch({
  className,
  postscript,
  error,
  value: baseValue,
  onChange: baseOnChange,
  children,
}: Props) {
  // TODO: ref - for react hook form
  // TODO: accessibility

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
      error={error}
    >
      <div className={styles.main} onClick={() => onChange(!value)}>
        {children}
        <div className={styles.switch} />
      </div>
    </ControlContainer>
  )
}
