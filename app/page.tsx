import Link from "next/link"

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6 py-12">
      <div className="max-w-lg w-full">
        {/* Name/Title */}
        <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-8">
          Your Name
        </h1>

        {/* Bio */}
        <div className="space-y-4 text-foreground/90 leading-relaxed">
          <p>
            I work on{" "}
            <Link 
              href="#" 
              className="text-accent underline decoration-accent/40 underline-offset-2 hover:decoration-accent transition-colors"
            >
              interesting projects
            </Link>{" "}
            and previously worked at{" "}
            <Link 
              href="#" 
              className="text-accent underline decoration-accent/40 underline-offset-2 hover:decoration-accent transition-colors"
            >
              a great company
            </Link>
            .
          </p>
          
          <p>
            Recently, I started a{" "}
            <Link 
              href="#" 
              className="text-accent underline decoration-accent/40 underline-offset-2 hover:decoration-accent transition-colors"
            >
              creative endeavor
            </Link>{" "}
            where I explore ideas that fascinate me and share stories worth telling.
          </p>
        </div>

        {/* Navigation Links */}
        <nav className="mt-10 pt-6 border-t border-border">
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            <Link 
              href="#" 
              className="font-medium text-foreground hover:text-accent transition-colors"
            >
              Writing
            </Link>
            <span className="text-muted-foreground">|</span>
            <Link 
              href="#" 
              className="font-medium text-foreground hover:text-accent transition-colors"
            >
              Bookshelf
            </Link>
            <span className="text-muted-foreground">|</span>
            <Link 
              href="#" 
              className="font-medium text-foreground hover:text-accent transition-colors"
            >
              Notes
            </Link>
          </div>
        </nav>
      </div>
    </main>
  )
}
