import { Quote } from "lucide-react";

export default function Testimonials() {
  return (
    <section className="bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            What people are saying
          </h2>
        </div>

        <div className="mt-12 divide-y divide-border sm:mt-16">
          <div className="py-8 first:pt-0">
            <Quote className="h-6 w-6 text-primary" aria-hidden="true" />
            <p className="mt-4 text-lg leading-relaxed text-foreground">
              {"The level of personalized care I received was unlike anything else. I felt heard, understood, and most importantly, I saw real results in my recovery within weeks."}
            </p>
            <div className="mt-6 flex items-center gap-3">
              <img
                src="https://placehold.co/96x96/e2e8f0/475569?text=%20"
                alt="Sarah Jenkins"
                className="h-12 w-12 rounded-full object-cover"
              />
              <div>
                <p className="text-sm font-semibold text-foreground">
                  {"Sarah Jenkins"}
                </p>
                <p className="text-xs text-muted-foreground">
                  {"Patient"}
                </p>
              </div>
            </div>
          </div>

          <div className="py-8">
            <Quote className="h-6 w-6 text-primary" aria-hidden="true" />
            <p className="mt-4 text-lg leading-relaxed text-foreground">
              {"The team's expertise and compassionate approach turned a stressful situation into a smooth journey toward healing. I cannot recommend them highly enough."}
            </p>
            <div className="mt-6 flex items-center gap-3">
              <img
                src="https://placehold.co/96x96/e2e8f0/475569?text=%20"
                alt="David Chen"
                className="h-12 w-12 rounded-full object-cover"
              />
              <div>
                <p className="text-sm font-semibold text-foreground">
                  {"David Chen"}
                </p>
                <p className="text-xs text-muted-foreground">
                  {"Patient"}
                </p>
              </div>
            </div>
          </div>

          <div className="py-8 last:pb-0">
            <Quote className="h-6 w-6 text-primary" aria-hidden="true" />
            <p className="mt-4 text-lg leading-relaxed text-foreground">
              {"Finding a provider that combines cutting-edge technology with a human touch is rare. They truly prioritize patient outcomes above everything else."}
            </p>
            <div className="mt-6 flex items-center gap-3">
              <img
                src="https://placehold.co/96x96/e2e8f0/475569?text=%20"
                alt="Dr. Elena Rodriguez"
                className="h-12 w-12 rounded-full object-cover"
              />
              <div>
                <p className="text-sm font-semibold text-foreground">
                  {"Dr. Elena Rodriguez"}
                </p>
                <p className="text-xs text-muted-foreground">
                  {"Medical Consultant"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}