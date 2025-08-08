import { AutoCenter } from '@/components'
import { APP_NAME } from '@/constants'
import styles from './index.module.less'

export default function App() {
  return (
    <div className={styles.app}>
			<AutoCenter>
				主页面，{APP_NAME}
			</AutoCenter>
    </div>
  )
}
