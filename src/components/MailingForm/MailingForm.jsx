import styles from './MailingForm.module.scss'

import submitMail from './../../assets/img/icons/send-mail.svg'
import mail from './../../assets/img/icons/mail.svg'

import React from 'react'

export const MailingForm = () => {
	return (
		<div className='container'>
			<form className={styles.mailingForm} action='#'>
				<h5 className={styles.mailingForm__title}>Subscribe to our newsletter for latest updates</h5>
				<div className={styles.mailingForm__input}>
					<div className={styles.input__block}>
						<img src={mail} alt='' />
						<input className={styles.input} type='email' name='email' id='email' placeholder='Enter your email address' />
					</div>
					<button className={styles.input__submit}>
						<img src={submitMail} alt='' />
					</button>
				</div>
			</form>
		</div>
	)
}
