export const metadata = {
  title: 'Contact',
  description: 'Get in touch to start your project',
}

export default function ContactPage() {
  return (
    <div className="min-h-screen px-2 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold mb-16 text-gray-800">
          Want to start a project?
        </h1>

        <div className="space-y-10 text-gray-800">
          <p className="plain-text">
            If you have a project or a potential collaboration you&apos;d like to discuss, email me at{' '}
            <a
              href="mailto:contact@example.com"
              className="text-gray-800 underline-straight hover:text-gray-600 transition-colors font-semibold"
            >
              contact@example.com
            </a>{' '}
            or give me a call and I&apos;ll reply to discuss your requirements and next steps to making something amazing!
          </p>

          <p className="plain-text italic text-gray-700">Note: I aim to respond within one day.</p>

          <div className="space-y-5 mt-12">
            <div className="text-xl">
              <span className="font-bold text-gray-800">Email: </span>
              <a
                href="mailto:contact@example.com"
                className="text-gray-800 underline-straight hover:text-gray-600 transition-colors font-semibold"
              >
                contact@example.com
              </a>
            </div>
            <div className="text-xl">
              <span className="font-bold text-gray-800">Telephone: </span>
              <a
                href="tel:07857224360"
                className="text-gray-800 underline-straight hover:text-gray-600 transition-colors font-semibold"
              >
                07857 224360
              </a>
            </div>
            <div className="text-xl">
              <span className="font-bold text-gray-800">Office Hours: </span>
              <span className="font-semibold">Mon-Fri 09:30-16:00</span>
            </div>
          </div>
        </div>
      </div>

      <footer className="mt-20 border-t border-gray-300 pt-8">
        <div className="max-w-4xl mx-auto px-2 text-center text-gray-600 text-base font-medium">
          <p>jessica@spokesdigital.com | Surrey, London & Buckinghamshire</p>
          <p className="mt-2">
            © Copyright 2023 Glenn Wilmore | Freelance Web Designer & Developer Surrey |{' '}
            <a
              href="#"
              className="text-gray-800 underline-straight hover:text-gray-600 transition-colors"
            >
              Privacy Policy
            </a>
          </p>
        </div>
      </footer>
    </div>
  )
}

