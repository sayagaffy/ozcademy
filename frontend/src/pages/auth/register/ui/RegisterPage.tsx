import { AuthLayout } from '../../../../shared/ui/Layouts/AuthLayout';
import { RegisterForm } from '../../../../features/auth/ui/RegisterForm';

export default function RegisterPage() {
  return (
    <AuthLayout
      protocolText="New Member Onboarding Protocol"
      heroTitle={
        <>
          TEMPAT PARA <br/><span className="text-primary">LEGENDA</span> DILAHIRKAN.
        </>
      }
      heroDescription="Bergabunglah dengan akademi penyiaran dan konten kreator paling bergengsi. Mulai bangun warisan digital Anda bersama OZCADEMY hari ini."
    >
      <RegisterForm />
    </AuthLayout>
  );
}
