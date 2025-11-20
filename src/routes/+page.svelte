<script lang="ts">
  import { Button } from "$lib/components/ui/button";
  import { Card } from "$lib/components/ui/card";
  import { LiquidChrome, Balatro } from "$lib/components";
  import {
    Clock,
    Lock,
    Users,
    ChevronRight,
    CheckCircle2,
    AlertTriangle,
    Heart,
  } from "lucide-svelte";
</script>

<div class="min-h-screen bg-background">
  <!-- Hero Section with Balatro Background -->
  <div
    class="relative overflow-hidden h-[calc(100vh+14rem)] md:h-[calc(100vh+10rem)]"
  >
    <!-- Balatro Background -->
    <div class="absolute inset-0 w-full h-full">
      <Balatro
        color1="#006BB4"
        color2="#00A8A8"
        color3="#0D1117"
        spinRotation={-2}
        spinSpeed={3.5}
        contrast={3.5}
        lighting={0.4}
        spinAmount={0.3}
        spinEase={1.0}
        isRotate={false}
        mouseInteraction={false}
        pixelFilter={2000.0}
      />
    </div>

    <!-- Overlay for better text readability -->
    <div class="absolute inset-0 bg-background/70"></div>

    <!-- Content -->
    <div class="relative z-10">
      <!-- Hero Header -->
      <header class="fixed top-0 left-0 right-0 z-50">
        <nav
          class="container mx-auto px-4 py-4 flex items-center justify-between rounded-lg border-b border-border/50 backdrop-blur-md bg-background/30"
        >
          <a href="/" class="flex items-center gap-2">
            <div
              class="w-10 h-10 rounded-lg flex items-center justify-center p-1"
            >
              <img
                src="/anubis-logo.png"
                alt="Anubis Protocol"
                class="w-full h-full object-contain"
              />
            </div>
            <span class="text-xl font-bold text-foreground font-kode"
              >Anubis Protocol</span
            >
          </a>
          <div class="hidden md:flex items-center gap-8">
            <a
              href="#features"
              class="text-foreground/80 hover:text-foreground transition-colors"
              >Features</a
            >
            <a
              href="#how-it-works"
              class="text-foreground/80 hover:text-foreground transition-colors"
              >How It Works</a
            >
            <a
              href="#security"
              class="text-foreground/80 hover:text-foreground transition-colors"
              >Security</a
            >
          </div>
          <Button variant="accent" size="lg">Get Started</Button>
        </nav>
      </header>

      <!-- Hero Content -->
      <section class="container mx-auto px-4 pt-50 md:pt-56 h-screen">
        <div class="max-w-2xl mx-auto text-center">
          <div
            class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background/60 backdrop-blur-md border border-border/50 mb-8"
          >
            <div class="w-2 h-2 rounded-full bg-accent animate-pulse"></div>
            <span class="text-sm text-foreground/90"
              >The fully decentralized crypto inheritance solution</span
            >
          </div>

          <h1
            class="text-5xl md:text-7xl font-bold text-foreground mb-6 text-balance leading-tight drop-shadow-lg"
          >
            Protect your legacy
          </h1>

          <p
            class="text-xl text-foreground/80 mb-10 max-w-xl mx-auto text-pretty leading-relaxed"
          >
            The fully decentralized way to secure and inherit your
            cryptocurrency.
          </p>

          <div class="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button size="lg" variant="accent">
              Create Your DeWill
              <ChevronRight class="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="secondary"
              class="border-border/50 backdrop-blur-md bg-background/40 text-foreground hover:bg-background/60 text-base px-8"
            >
              Learn More
            </Button>
          </div>

          <!-- Backed by Section -->
          <div class="flex items-center justify-center gap-3">
            <div
              class="flex items-center gap-2 px-4 py-3 rounded-xl bg-background/50 backdrop-blur-md border border-border/30"
            >
              <span class="text-sm text-muted-foreground">Backed by</span>
              <a
                href="https://axton.wtf"
                target="_blank"
                class="flex items-center gap-2 hover:scale-105 transition-transform"
              >
                <img
                  src="/axton-logo.png"
                  alt="Axton Labs"
                  class="w-6 h-6 object-contain"
                />
                <span
                  class="text-base font-semibold text-foreground font-azonix"
                  >Axton Labs</span
                >
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
    <!-- Stats -->
    <section
      class="border-y border-border bg-secondary/30 absolute bottom-0 left-0 right-0"
    >
      <div class="container mx-auto px-4 py-12">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div class="text-center">
            <div class="text-3xl md:text-4xl font-bold text-accent mb-2">
              $25K
            </div>
            <div class="text-sm text-muted-foreground">
              Total Value Protected
            </div>
          </div>
          <div class="text-center">
            <div class="text-3xl md:text-4xl font-bold text-foreground mb-2">
              100%
            </div>
            <div class="text-sm text-muted-foreground">Decentralized</div>
          </div>
          <div class="text-center">
            <div class="text-3xl md:text-4xl font-bold text-foreground mb-2">
              24/7
            </div>
            <div class="text-sm text-muted-foreground">Instant transfers</div>
          </div>
          <div class="text-center">
            <div class="text-3xl md:text-4xl font-bold text-foreground mb-2">
              $0
            </div>
            <div class="text-sm text-muted-foreground">Third-party access</div>
          </div>
        </div>
      </div>
    </section>
  </div>

  <!-- Why DeWill -->
  <section class="container mx-auto px-4 py-20 md:py-32">
    <div class="text-center mb-16">
      <h2
        class="text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance"
      >
        Why you need Anubis Protocol
      </h2>
      <p class="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
        Life is unpredictable. Protect your crypto assets and ensure your loved
        ones are taken care of, no matter what happens.
      </p>
    </div>

    <div class="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
      <Card class="p-8 bg-card border-border">
        <div
          class="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-6"
        >
          <svg
            class="w-6 h-6 text-accent"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
        </div>
        <h3 class="text-xl font-bold text-card-foreground mb-4">
          Digital Estate Planning
        </h3>
        <p class="text-muted-foreground leading-relaxed mb-4">
          Traditional wills don't cover cryptocurrency. Anubis Protocol ensures
          your digital assets pass to your chosen beneficiaries automatically.
        </p>
        <ul class="space-y-2 text-sm text-muted-foreground">
          <li class="flex gap-2">
            <CheckCircle2 class="w-4 h-4 text-accent shrink-0 mt-0.5" />
            <span>No probate delays</span>
          </li>
          <li class="flex gap-2">
            <CheckCircle2 class="w-4 h-4 text-accent shrink-0 mt-0.5" />
            <span>Instant transfers</span>
          </li>
          <li class="flex gap-2">
            <CheckCircle2 class="w-4 h-4 text-accent shrink-0 mt-0.5" />
            <span>Without paperwork</span>
          </li>
        </ul>
      </Card>

      <Card class="p-8 bg-card border-border">
        <div
          class="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-6"
        >
          <AlertTriangle class="w-6 h-6 text-accent" />
        </div>
        <h3 class="text-xl font-bold text-card-foreground mb-4">
          Protection From Loss
        </h3>
        <p class="text-muted-foreground leading-relaxed mb-4">
          Lost seed phrases, forgotten passwords, hardware failures - Anubis
          Protocol protects you from common mistakes and accidents.
        </p>
        <ul class="space-y-2 text-sm text-muted-foreground">
          <li class="flex gap-2">
            <CheckCircle2 class="w-4 h-4 text-accent shrink-0 mt-0.5" />
            <span>Recover lost access</span>
          </li>
          <li class="flex gap-2">
            <CheckCircle2 class="w-4 h-4 text-accent shrink-0 mt-0.5" />
            <span>Backup security layer</span>
          </li>
          <li class="flex gap-2">
            <CheckCircle2 class="w-4 h-4 text-accent shrink-0 mt-0.5" />
            <span>Prevent human error</span>
          </li>
        </ul>
      </Card>

      <Card class="p-8 bg-card border-border">
        <div
          class="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-6"
        >
          <Heart class="w-6 h-6 text-accent" />
        </div>
        <h3 class="text-xl font-bold text-card-foreground mb-4">
          Life's Uncertainties
        </h3>
        <p class="text-muted-foreground leading-relaxed mb-4">
          Illness, accidents, imprisonment, or kidnapping - ensure your family
          can access funds when they need them most.
        </p>
        <ul class="space-y-2 text-sm text-muted-foreground">
          <li class="flex gap-2">
            <CheckCircle2 class="w-4 h-4 text-accent shrink-0 mt-0.5" />
            <span>Emergency access</span>
          </li>
          <li class="flex gap-2">
            <CheckCircle2 class="w-4 h-4 text-accent shrink-0 mt-0.5" />
            <span>Family protection</span>
          </li>
          <li class="flex gap-2">
            <CheckCircle2 class="w-4 h-4 text-accent shrink-0 mt-0.5" />
            <span>Peace of mind</span>
          </li>
        </ul>
      </Card>
    </div>
  </section>

  <!-- Features -->
  <section
    id="features"
    class="bg-secondary/30 border-y border-border py-20 md:py-32"
  >
    <div class="container mx-auto px-4">
      <div class="text-center mb-16">
        <h2
          class="text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance"
        >
          Never lose access to your crypto
        </h2>
        <p class="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
          Anubis Protocol monitors your wallet activity and automatically
          transfers funds to trusted beneficiaries if needed
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card
          class="p-8 bg-card border-border hover:border-accent/50 transition-colors"
        >
          <div
            class="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-6 p-2"
          >
            <img
              src="/anubis-logo.png"
              alt="Anubis"
              class="w-full h-full object-contain"
            />
          </div>
          <h3 class="text-xl font-bold text-card-foreground mb-3">
            Fully Decentralized
          </h3>
          <p class="text-muted-foreground leading-relaxed">
            Powered by smart contracts. No centralized authority or third party
            ever has access to your funds.
          </p>
        </Card>

        <Card
          class="p-8 bg-card border-border hover:border-accent/50 transition-colors"
        >
          <div
            class="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-6"
          >
            <Clock class="w-6 h-6 text-accent" />
          </div>
          <h3 class="text-xl font-bold text-card-foreground mb-3">
            Automatic Recovery
          </h3>
          <p class="text-muted-foreground leading-relaxed">
            Set an inactivity threshold. If no transactions are made within the
            period you set, the funds will be ready for transfer.
          </p>
        </Card>

        <Card
          class="p-8 bg-card border-border hover:border-accent/50 transition-colors"
        >
          <div
            class="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-6"
          >
            <Lock class="w-6 h-6 text-accent" />
          </div>
          <h3 class="text-xl font-bold text-card-foreground mb-3">
            Trustless Security
          </h3>
          <p class="text-muted-foreground leading-relaxed">
            Open-source smart contracts audited by leading security firms. Your
            security is verifiable and transparent.
          </p>
        </Card>

        <Card
          class="p-8 bg-card border-border hover:border-accent/50 transition-colors"
        >
          <div
            class="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-6"
          >
            <Users class="w-6 h-6 text-accent" />
          </div>
          <h3 class="text-xl font-bold text-card-foreground mb-3">
            Multiple Beneficiaries
          </h3>
          <p class="text-muted-foreground leading-relaxed">
            Distribute assets to multiple trusted wallets. Perfect for families
            or business succession planning.
          </p>
        </Card>

        <Card
          class="p-8 bg-card border-border hover:border-accent/50 transition-colors"
        >
          <div
            class="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-6"
          >
            <CheckCircle2 class="w-6 h-6 text-accent" />
          </div>
          <h3 class="text-xl font-bold text-card-foreground mb-3">
            Easy Setup
          </h3>
          <p class="text-muted-foreground leading-relaxed">
            Connect your wallet, set your parameters, and you're protected. No
            complex technical knowledge required.
          </p>
        </Card>

        <Card
          class="p-8 bg-card border-border hover:border-accent/50 transition-colors"
        >
          <div
            class="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-6"
          >
            <svg
              class="w-6 h-6 text-accent"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
              />
            </svg>
          </div>
          <h3 class="text-xl font-bold text-card-foreground mb-3">
            Flexible Parameters
          </h3>
          <p class="text-muted-foreground leading-relaxed">
            Customize inactivity periods, beneficiaries, and distribution
            percentages to match your needs.
          </p>
        </Card>
      </div>
    </div>
  </section>

  <!-- How It Works -->
  <section id="how-it-works" class="container mx-auto px-4 py-20 md:py-32">
    <div class="text-center mb-16">
      <h2
        class="text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance"
      >
        How Anubis Protocol works
      </h2>
      <p class="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
        Simple, secure, and completely autonomous
      </p>
    </div>

    <div class="max-w-4xl mx-auto space-y-8">
      <div class="flex gap-6 items-start">
        <div
          class="shrink-0 w-12 h-12 rounded-full bg-accent flex items-center justify-center text-accent-foreground font-bold"
        >
          1
        </div>
        <div>
          <h3 class="text-xl font-bold text-foreground mb-2">
            Connect Your Wallet
          </h3>
          <p class="text-muted-foreground leading-relaxed">
            Connect your cryptocurrency wallet to the Anubis Protocol smart
            contract. Your keys remain yours - we never have access.
          </p>
        </div>
      </div>

      <div class="flex gap-6 items-start">
        <div
          class="shrink-0 w-12 h-12 rounded-full bg-accent flex items-center justify-center text-accent-foreground font-bold"
        >
          2
        </div>
        <div>
          <h3 class="text-xl font-bold text-foreground mb-2">
            Set Your Parameters
          </h3>
          <p class="text-muted-foreground leading-relaxed">
            Choose your inactivity threshold (e.g., 12 months) and designate
            trusted beneficiary wallets. You can update these anytime.
          </p>
        </div>
      </div>

      <div class="flex gap-6 items-start">
        <div
          class="shrink-0 w-12 h-12 rounded-full bg-accent flex items-center justify-center text-accent-foreground font-bold"
        >
          3
        </div>
        <div>
          <h3 class="text-xl font-bold text-foreground mb-2">
            Live Your Life Normally
          </h3>
          <p class="text-muted-foreground leading-relaxed">
            Continue using your wallet as usual. Any transaction automatically
            resets the inactivity timer, keeping your funds secure.
          </p>
        </div>
      </div>

      <div class="flex gap-6 items-start">
        <div
          class="shrink-0 w-12 h-12 rounded-full bg-accent flex items-center justify-center text-accent-foreground font-bold"
        >
          4
        </div>
        <div>
          <h3 class="text-xl font-bold text-foreground mb-2">
            Automatic Protection
          </h3>
          <p class="text-muted-foreground leading-relaxed">
            If your wallet remains inactive beyond the threshold, the smart
            contract transfers funds to your designated beneficiaries. No
            paperwork intervention needed.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- Security -->
  <section
    id="security"
    class="bg-secondary/30 border-y border-border py-20 md:py-32"
  >
    <div class="container mx-auto px-4">
      <div class="max-w-5xl mx-auto">
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2
              class="text-3xl md:text-5xl font-bold text-foreground mb-6 text-balance leading-tight"
            >
              Your security is non-negotiable
            </h2>
            <p class="text-lg text-muted-foreground mb-6 leading-relaxed">
              Anubis Protocol is built on battle-tested smart contract
              technology. Every line of code is open-source and audited.
            </p>
            <ul class="space-y-4">
              <li class="flex gap-3 items-start">
                <CheckCircle2 class="w-6 h-6 text-accent shrink-0 mt-0.5" />
                <span class="text-foreground"
                  >No team access to your funds - ever</span
                >
              </li>
              <li class="flex gap-3 items-start">
                <CheckCircle2 class="w-6 h-6 text-accent shrink-0 mt-0.5" />
                <span class="text-foreground">Open-source smart contracts</span>
              </li>
              <li class="flex gap-3 items-start">
                <CheckCircle2 class="w-6 h-6 text-accent shrink-0 mt-0.5" />
                <span class="text-foreground"
                  >Audited by leading security firms</span
                >
              </li>
              <li class="flex gap-3 items-start">
                <CheckCircle2 class="w-6 h-6 text-accent shrink-0 mt-0.5" />
                <span class="text-foreground"
                  >Non-custodial - you maintain control</span
                >
              </li>
            </ul>
          </div>
          <div class="relative">
            <Card class="p-8 bg-card border-border">
              <div class="space-y-6">
                <div
                  class="flex items-center gap-4 p-4 bg-secondary rounded-lg"
                >
                  <div
                    class="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center"
                  >
                    <Users class="w-5 h-5 text-accent" />
                  </div>
                  <div class="flex-1">
                    <div class="text-sm font-medium text-card-foreground">
                      Your Control
                    </div>
                    <div class="text-xs text-muted-foreground">
                      Non-custodial
                    </div>
                  </div>
                  <div
                    class="text-xs px-2 py-1 rounded bg-accent/10 text-accent"
                  >
                    Always
                  </div>
                </div>

                <div
                  class="flex items-center gap-4 p-4 bg-secondary rounded-lg"
                >
                  <div
                    class="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center"
                  >
                    <Lock class="w-5 h-5 text-accent" />
                  </div>
                  <div class="flex-1">
                    <div class="text-sm font-medium text-card-foreground">
                      Smart Contract
                    </div>
                    <div class="text-xs text-muted-foreground">
                      Solana Mainnet
                    </div>
                  </div>
                  <div
                    class="text-xs px-2 py-1 rounded bg-accent/10 text-accent"
                  >
                    TBA
                  </div>
                </div>

                <div
                  class="flex items-center gap-4 p-4 bg-secondary rounded-lg"
                >
                  <div
                    class="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center p-1.5"
                  >
                    <img
                      src="/anubis-logo.png"
                      alt="Anubis"
                      class="w-full h-full object-contain"
                    />
                  </div>
                  <div class="flex-1">
                    <div class="text-sm font-medium text-card-foreground">
                      Security Audit
                    </div>
                    <div class="text-xs text-muted-foreground">TBA</div>
                  </div>
                  <div
                    class="text-xs px-2 py-1 rounded bg-accent/10 text-accent"
                  >
                    TBA
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA -->
  <section class="relative overflow-hidden">
    <!-- Liquid Chrome Background -->
    <div class="absolute left-0 right-0 w-full h-full aspect-video">
      <LiquidChrome baseColor={[0, 0.1, 0.1]} speed={0.1} interactive={false} />
    </div>

    <!-- Overlay -->
    <div class="absolute inset-0 bg-background/70"></div>

    <!-- Content -->
    <div class="relative z-10 py-20 md:py-32">
      <div class="container mx-auto px-4 text-center">
        <h2
          class="text-3xl md:text-5xl font-bold mb-6 text-balance text-foreground drop-shadow-lg"
        >
          Protect your crypto legacy today
        </h2>
        <p
          class="text-lg mb-10 max-w-2xl mx-auto text-pretty text-foreground/90"
        >
          Join thousands of crypto holders who have secured their digital assets
          with Anubis Protocol
        </p>
        <Button
          size="lg"
          class="bg-background text-foreground hover:bg-background/90 text-base px-8 shadow-xl"
        >
          Create Your DeWill
          <ChevronRight class="ml-2 w-5 h-5" />
        </Button>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="border-t border-border bg-background">
    <div class="container mx-auto px-4 py-12">
      <div class="grid md:grid-cols-4 gap-8 mb-8">
        <div>
          <div class="flex items-center gap-2 mb-4">
            <div
              class="w-8 h-8 rounded-lg flex items-center justify-center p-1"
            >
              <img
                src="/anubis-logo.png"
                alt="Anubis Protocol"
                class="w-full h-full object-contain"
              />
            </div>
            <span class="font-bold text-foreground font-kode"
              >Anubis Protocol</span
            >
          </div>
          <p class="text-sm text-muted-foreground">
            The fully decentralized crypto inheritance solution.
          </p>
        </div>
        <div>
          <h4 class="font-semibold text-foreground mb-4">Product</h4>
          <ul class="space-y-2 text-sm text-muted-foreground">
            <li>
              <a
                href="#features"
                class="hover:text-foreground transition-colors">Features</a
              >
            </li>
            <li>
              <a
                href="#how-it-works"
                class="hover:text-foreground transition-colors">How It Works</a
              >
            </li>
            <li>
              <a
                href="#security"
                class="hover:text-foreground transition-colors">Security</a
              >
            </li>
          </ul>
        </div>
        <div>
          <h4 class="font-semibold text-foreground mb-4">Resources</h4>
          <ul class="space-y-2 text-sm text-muted-foreground">
            <li>
              <a
                href="/documentation"
                class="hover:text-foreground transition-colors">Documentation</a
              >
            </li>
            <li>
              <a
                href="/smart-contracts"
                class="hover:text-foreground transition-colors"
                >Smart Contracts</a
              >
            </li>
            <li>
              <a
                href="/audit-reports"
                class="hover:text-foreground transition-colors">Audit Reports</a
              >
            </li>
          </ul>
        </div>
        <div>
          <h4 class="font-semibold text-foreground mb-4">Community</h4>
          <ul class="space-y-2 text-sm text-muted-foreground">
            <li>
              <a
                href="https://discord.com/invite/anubisprotocol"
                class="hover:text-foreground transition-colors">Discord</a
              >
            </li>
            <li>
              <a
                href="https://twitter.com/anubisprotocol"
                class="hover:text-foreground transition-colors">Twitter</a
              >
            </li>
            <li>
              <a
                href="https://github.com/anubisprotocol"
                class="hover:text-foreground transition-colors">GitHub</a
              >
            </li>
          </ul>
        </div>
      </div>
      <div
        class="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
      >
        <p class="text-sm text-muted-foreground">
          © 2025 Anubis Protocol. All rights reserved.
        </p>
        <div class="flex gap-6 text-sm text-muted-foreground">
          <a href="/privacy" class="hover:text-foreground transition-colors"
            >Privacy</a
          >
          <a href="/terms" class="hover:text-foreground transition-colors"
            >Terms</a
          >
        </div>
      </div>
    </div>
  </footer>
</div>
