
import ContactForm from '@/components/ContactForm';


export default function ContactPage() {
  return (
    <main className='max-w-3xl mx-auto p-8 '>

      {/* Header*/}
      <header className='text-center mb-10'>
        <h1 className='text-3xl font-bold'>Help Us Make it Better</h1>
      </header>

      <ContactForm />
    </main>
  )
}
