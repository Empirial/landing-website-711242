export default function About() {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-6 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Redefining Patient Care Through Innovation and Compassion
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
            At our clinic, we believe that exceptional healthcare is found at the intersection of human empathy and advanced medical science. Our mission is to provide a healing environment where every patient feels heard, understood, and prioritized. By combining a personalized approach with cutting-edge diagnostic tools, we ensure that your journey to wellness is both efficient and deeply supportive.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            We are committed to staying at the forefront of medical evolution. By integrating the latest technological advancements into our daily practice, we offer more precise diagnostics and minimally invasive treatments. This dedication allows us to focus on what matters most: delivering high-quality, reliable care that helps you return to your life with confidence and vitality.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          <div className="rounded-lg border border-border bg-card p-6 text-card-foreground">
            <h3 className="text-lg font-semibold text-foreground">Patient-Centered Approach</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Your health is unique. We tailor every treatment plan to your specific needs, lifestyle, and long-term wellness goals.
            </p>
          </div>
          <div className="rounded-lg border border-border bg-card p-6 text-card-foreground">
            <h3 className="text-lg font-semibold text-foreground">Advanced Technology</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              We utilize state-of-the-art medical equipment and digital integration to ensure the highest standards of diagnostic accuracy.
            </p>
          </div>
          <div className="rounded-lg border border-border bg-card p-6 text-card-foreground">
            <h3 className="text-lg font-semibold text-foreground">Expert Clinicians</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Our team consists of highly trained specialists dedicated to continuous learning and excellence in clinical practice.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}