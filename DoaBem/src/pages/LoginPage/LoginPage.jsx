import { BrandPanel } from '../../components/BrandPanel/BrandPanel.jsx'
import { LoginForm } from '../../components/LoginForm/LoginForm.jsx'
import { FormSide, Page } from './LoginPage.styles.js'

export default function LoginPage() {
  return (
    <Page>
      <BrandPanel />
      <FormSide>
        <LoginForm />
      </FormSide>
    </Page>
  )
}
