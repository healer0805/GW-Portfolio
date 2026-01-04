import Link from 'next/link'

export default function CallToActionSection() {
  return (
    <section className="py-16 px-2 border-t border-gray-300">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl md:text-6xl font-bold mb-10 text-gray-800">
          Interested in starting a project?
        </h2>
        <p className="plain-text text-gray-800 mb-12">
          If you have a project you&apos;d like to discuss, email me at{' '}
          <a
            href="mailto:contact@example.com"
            className="text-gray-800 underline-straight hover:text-gray-600 transition-colors font-semibold"
          >
            contact@example.com
          </a>{' '}
          or call me now so we can discuss your requirements and next steps to making something amazing!
        </p>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-gray-300">
          <p className="text-gray-600 mb-2 text-base font-medium">
            contact@example.com | Surrey, London & Buckinghamshire
          </p>
          <p className="text-gray-600 text-base font-medium">
            © Copyright 2023 Glenn Wilmore | Freelance Web Designer & Developer Surrey |{' '}
            <Link
              href="#"
              className="text-gray-800 underline-straight hover:text-gray-600 transition-colors"
            >
              Privacy Policy
            </Link>
          </p>
        </footer>
      </div>
    </section>
  )
}

