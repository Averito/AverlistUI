import {
	FC,
	MouseEventHandler,
	PropsWithChildren,
	useEffect,
	useRef
} from 'react'
import { createPortal } from 'react-dom'
import classNames from 'classnames'
// TODO: Подумать по поводу иконок.
import { IoMdClose } from 'react-icons/io'

import styles from './Modal.module.scss'
import { Button } from '@components/Button'
import { useOutside } from '@hooks/useOutside'
import { ModalProps } from './Modal.types'

/*
 * @description Модальное окно. Импортировать только через next/dynamic
 * @props {ModalProps} props
 */
const Modal: FC<PropsWithChildren<ModalProps>> = ({
	children,
	okText = 'Ок',
	onOk,
	opened,
	onCancel,
	title = 'Заголовок',
	width = '100%',
	closeOutside
}) => {
	const onClickClose: MouseEventHandler<SVGAElement> = () => {
		onCancel?.()
	}
	const onClickOk: MouseEventHandler<HTMLButtonElement> = () => {
		onOk?.()
	}

	const modal = useRef(null)
	useOutside(modal, () => {
		if (!closeOutside || !opened) return
		onCancel?.()
	})

	useEffect(() => {
		if (opened) {
			document.body.style.overflow = 'hidden'
			return
		}
		document.body.style.overflow = 'hidden auto'

		return () => {
			document.body.style.overflow = 'hidden auto'
		}
	}, [opened])

	const modalContainerClass = opened ? styles.modalContainerActive : ''

	return createPortal(
		<div className={classNames(styles.modalContainer, modalContainerClass)}>
			<div className={styles.modalWrapper} ref={modal} style={{ width }}>
				<div className={styles.modalHeader}>
					<h2 className={styles.title}>{title}</h2>
					<IoMdClose size={22} cursor='pointer' onClick={onClickClose} />
				</div>
				<div className={styles.modalContent}>{children}</div>
				<div className={styles.modalBottom}>
					<Button className={styles.modalBottomButton} onClick={onClickOk}>
						{okText}
					</Button>
				</div>
			</div>
		</div>,
		document.body
	)
}

export default Modal
