import { AuthLayout } from '../../../../shared/ui/Layouts/AuthLayout';
import { LoginForm } from '../../../../features/auth/ui/LoginForm';

export default function LoginPage() {
  return (
    <AuthLayout
      protocolText="Live Transmission Protocol"
      heroTitle={
        <>
          Tempat Para <br/><span className="text-primary">Legenda</span> Dilahirkan.
        </>
      }
      heroDescription="Masuk ke pusat kendali OZCADEMY dan lanjutkan perjalananmu menjadi konten kreator profesional kelas dunia."
    >
      <LoginForm />
    </AuthLayout>
  );
}
