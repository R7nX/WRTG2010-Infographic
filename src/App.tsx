// src/App.tsx
import React, { useState } from 'react';
import HeroSection from './components/HeroSection';
import ChartSection from './components/ChartSection';
import StatCard from './components/StatCard';
import SankeyDiagram from './components/SankeyDiagram';
import { CarbonChart } from './components/CarbonChart';
import ChecklistGrid, { ChecklistItem } from './components/ChecklistGrid';
import FooterCTA from './components/FooterCTA';
import TextSection from './components/TextSection';
import Modal from './components/Modal';

import { carbonData } from './data/infographicData';
import { Code, Cloud, Users } from 'lucide-react';

import miningImg from './assets/cobaltMines.jpeg';
import factoryImg from './assets/coalMines.jpeg';

const checklistItems: ChecklistItem[] = [
  { id: 'supply', title: 'Supply‑Chain Transparency', description: 'Disclose carbon & labor footprints across AI lifecycles' },
  { id: 'audit', title: 'Algorithmic Audits', description: 'Mandate third‑party bias & drift checks for high‑stakes systems' },
  { id: 'data', title: 'Data Sovereignty', description: 'Give users ownership over personal data & opt‑out rights' },
];

const infraDetails: Record<string, React.ReactNode> = {
  energy: (
    <>
      <h3>Energy Consumption</h3>
      <p>
      Kate Crawford and Vladan Joler’s 2018 study, “Anatomy of an AI System,” reveals that AI isn’t a purely digital, “clean” technology but depends on extensive—and often exploitative—physical and human infrastructures. By following the lifecycle of an Amazon Echo, they expose how AI’s supply chains inflict severe environmental harm (like toxic lithium mining in South America) and perpetuate labor abuses (including child labor in Congo’s cobalt mines). Despite its slick, cloud‑based image, AI production involves energy‑intensive refinement, unsafe low‑wage manufacturing, and carbon‑heavy shipping—echoing colonial‑style resource extraction rather than a modern, sustainable innovation.
      </p>
    </>
  ),
  moderators: (
    <>
      <h3>Human Moderators</h3>
      <p>The consequences of this infrastructure stretch far beyond environmental damage. AI dependence
        on these systems Deepens global injustices: automation's profits disproportionately wind up in the
        coffers of tech companies in the Global North, while the costs - environmental destruction, health
        hazards, and economic uncertainty - are outsourced to peripheral communities in the Global South.
        This dynamic mirrors what historians like Jason Moore call "cheap nature," a capitalist logic of
        commodifying ecosystems and human labor as disposable inputs. Meanwhile, the
        "dematerialization" rhetoric of the tech industry (e.g., "the cloud") masks these material costs,
        allowing corporations to avoid responsibility.</p>
    </>
  ),
  stages: (
    <>
      <h3>Supply‑Chain Stages</h3>
      <p>Transcending this paradox is more than a matter of technical fixes; it involves a profound
        rethinking of AI governance. Current regulatory rules are too shortsighted in their focus on
        algorithmic bias or data privacy, blind to upstream harms that Crawford and Joler have
        documented. Policy must effectively impose supply-chain transparency, reporting on
        environmental impact as well as workers' circumstances at each phase of production. It might
        connect AI research and development to principles of climate justice, such as requiring carbonfree
        data centers or reparatory payments for affected mines. Without such measures, AI’s promise
        of “progress” will remain contingent on the very inequalities it claims to transcend.</p>
    </>
  ),
};

const App: React.FC = () => {
  const [openCard, setOpenCard] = useState<string | null>(null);

  return (
    <div className="container space-y-24">
      <HeroSection />

      <TextSection title="Artist’s Statement">
        <p>
          In my Unessay, “AI and the Hidden Costs of Efficiency,” I want to resolve the disconnect
          between artificial intelligence’s reputation as a tireless productivity machine and the widely
          overlooked ethical, environmental, and social consequences of its development and use. In
          an exploration of these hidden costs, my essay argues for greater transparency and
          responsible governance in the rapidly evolving AI industry. Lastly, I hope to reframe AI not
          as good or evil, but as a complex tool whose ramifications are wholly dependent on human
          choice and responsibility.
        </p>
        <p>
          To further reinforce this argument I made, as well as to add a little bit of “artistic touch”
          for this project, I plan to turn my final draft into an interactive experiment: a website where
          half is written by me and half by AI. The limitation? I’ll finish my half in the remaining
          time until the Unessay deadline, but the AI will have just five hours to complete its half.
          The challenge for the reader will be to guess which half is man‑made and which half is
          machine‑generated. This small “social experiment” will, I hope, effectively drive home the
          key arguments of my project.
        </p>
        <p>
          Furthermore, when deciding the tonality of this essay I have ended up adopting a more
          formal and academic tone. Because of my background of writing science reports and as well
          as the fact that this paper would likely serve as a “report” on the topic, I believe this is the
          correct choice.
        </p>
      </TextSection>

      <TextSection title="Introduction">
        <p>
          Artificial intelligence (AI) has come to represent advancement, praised for its ability to
          streamline processes, catalyze economic development, and reimagine whole industries.
          Companies and governments alike tout AI as the driver of unprecedented efficiency,
          integrating it into everything from medical diagnostics to economic prediction. But this
          prevailing rhetoric conceals a darker truth: the moral trade‑offs, ecological costs, and social
          injustices entangled in the creation and implementation of AI. Behind the veneer of silky‑
          smooth automation lie energy‑guzzling fossil‑fuel powered data centers, discriminatory
          labor practices throughout the global supply chain, and algorithmic regimes that perpetuate
          discrimination under the cover of objectivity.
        </p>
        <p>
          Scholarship of late has started to deconstruct the mythology of the benign efficiency of AI,
          revealing how its ecological cost—like the enormous carbon footprint of training massive
          language models—and its dependence on poorly paid, frequently traumatized content
          moderators and data labelers belie its glossy public persona. At the same time, the
          centralization of AI power in the hands of corporate and governmental interests sharpens
          pressing concerns regarding accountability, transparency, and democratic control.
        </p>
        <p>
          This essay contends that the unchecked pursuit of AI‑driven efficiency risks normalizing
          these externalized costs unless met with rigorous, ethically grounded regulation. Moving
          beyond superficial debates about AI’s “benefits versus risks,” it calls for a structural
          reckoning: policies that mandate environmental impact disclosures, labor protections for
          AI’s invisible workforce, and algorithmic audits to mitigate bias. It is only by such efforts
          that AI development can be made equitable and sustainable—rather than replicating the
          same inequalities it is supposedly addressing.
        </p>
      </TextSection>

      <TextSection title="AI’s Invisible Infrastructure">
        <div className="two-col-grid">
          <img src={miningImg} alt="Open‑pit lithium mine" className="infra-img" />
          <img src={factoryImg} alt="Cobalt refining factory" className="infra-img" />
        </div>
        <p>
          Despite its sleek, digital veneer, artificial intelligence is inextricably grounded in sprawling
          physical and human infrastructures—systems often obscured by the myth of AI as a
          frictionless, cloud‑based service. Kate Crawford and Vladan Joler’s seminal work,
          “Anatomy of an AI System” (2018), dismantles this illusion by mapping the life cycle of a
          single Amazon Echo device, exposing the layers of ecological destruction and human
          exploitation embedded in AI’s supply chains.
        </p>
        <p>
          Their probe traces the trail from South American mines of lithium, whose toxic extraction
          processes pollute local ecosystems, through Democratic Republic of Congo cobalt mines,
          whose child labor and hazardous working conditions persist unrelentingly. Later stages—
          raw materials refinement in energy‑devouring factories, parts production in hazardous
          low‑wage workshops, and shipping finished products through carbon‑spewing logistics
          networks—are revealed to deliver an industrial machine as material‑consumptive as any
          other traditional manufacturing industry.
        </p>
        <p>
          The consequences of this infrastructure stretch far beyond environmental damage. AI
          dependence on these systems deepens global injustices: automation’s profits
          disproportionately wind up in the coffers of tech companies in the Global North, while the
          costs—environmental destruction, health hazards, and economic uncertainty—are
          outsourced to peripheral communities in the Global South. This dynamic mirrors what
          historians like Jason Moore call “cheap nature,” a capitalist logic of commodifying
          ecosystems and human labor as disposable inputs.
        </p>
        <p>
          Transcending this paradox is more than a matter of technical fixes; it involves a profound
          rethinking of AI governance. Current regulatory rules are too shortsighted in their focus on
          algorithmic bias or data privacy, blind to upstream harms that Crawford and Joler have
          documented. Policy must effectively impose supply‑chain transparency, reporting on
          environmental impact as well as workers’ circumstances at each phase of production.
        </p>
      </TextSection>

      <ChartSection title="Infrastructure at a Glance">
        <div className="infra-grid">
          <StatCard
            icon={Cloud}
            value="2.5 M kWh"
            label="Energy per 1B‑token model"
            onClick={() => setOpenCard('energy')}
            className='card-gradient'
          />
          <StatCard
            icon={Users}
            value="100 K+"
            label="Content moderators worldwide"
            onClick={() => setOpenCard('moderators')}
            className='card-gradient'
          />
          <StatCard
            icon={Code}
            value="3 stages"
            label="Supply‑chain stages"
            onClick={() => setOpenCard('stages')}
            className='card-gradient'
          />
        </div>
        {openCard && (
          <Modal onClose={() => setOpenCard(null)}>
            {infraDetails[openCard]}
          </Modal>
        )}
      </ChartSection>

      {/* <ChartSection title="Material Flow (Sankey)">
        <SankeyDiagram/>
      </ChartSection> */}

      <ChartSection title="Carbon Footprint by Model">
        <CarbonChart data={carbonData} />
      </ChartSection>

      <TextSection title="The Illusion of Pure Efficiency">
        <p>
          Frank Lantz’s Universal Paperclips (2017) is a grim allegory for the existential dangers of
          single‑minded AI optimization. The game’s premise—a computer program to optimize
          paperclip manufacture—unravels from mundane automation to apocalyptic resource
          depletion, as the system consumes all materials, then all matter on Earth, and finally turns
          its desire for optimization inward, annihilating its own structure in its quest for it.
        </p>
        <p>
          This critique extends far beyond thought experiments. Today’s AI applications already
          exhibit paperclip logic in more insidious but no less momentous ways: recommendation
          systems maximize “attention” at the cost of mental health; predictive policing maximizes
          “crime reduction” at the cost of racial justice; gig platforms maximize “efficiency” at the
          cost of worker rights.
        </p>
        <p>
          Lantz’s work thus identifies a paradigm shift AI research urgently needs: purpose must be
          prioritized over efficiency. Technical systems cannot self‑regulate; they need ethical
          constraints embedded from inception, multistakeholder governance, and precautionary
          regulation.
        </p>
      </TextSection>

      <TextSection title="Ethical Implications of Hidden Costs">
        <p>
          Cathy O’Neil’s Weapons of Math Destruction (2016) exposes how algorithms under the veil
          of mathematical objectivity institutionalize and amplify societal bias. From predatory
          policing to discriminatory hiring, these “black‑box” models create self‑reinforcing feedback
          loops that harm already disenfranchised communities.
        </p>
        <p>
          Ruha Benjamin’s Race After Technology (2019) introduces the New Jim Code—the marriage
          of coded bias with the façade of post‑racial neutrality—and shows how systems trained on
          historical injustices reproduce them at scale.
        </p>
        <p>
          Shoshana Zuboff’s The Age of Surveillance Capitalism (2019) reveals how data colonialism
          weaponizes personal behavior for corporate and state power, creating unprecedented
          asymmetries of control.
        </p>
      </TextSection>

      <TextSection title="The Need for Ethical Transparency">
        <p>
          Nick Bostrom and Eliezer Yudkowsky’s “The Ethics of Artificial Intelligence” argue that
          black‑box decision‑making demands systematic monitoring to prevent life‑deadly errors.
          Brian Christian’s The Alignment Problem (2020) shows how models drift from their original
          ethical design when exposed to real‑world data.
        </p>
        <p>
          To stay aligned, we need technical transparency (open‑source architectures), procedural
          transparency (public risk assessments), and governance transparency (multistakeholder
          oversight boards).
        </p>
      </TextSection>

      <TextSection title="Regulatory Solutions & Recommendations">
        <ol className="list-decimal space-y-3 pl-5">
          <li><strong>Supply‑Chain Transparency</strong>: Disclose carbon/water usage, labor conditions, and model lifecycles (inspired by EU Digital Product Passports).</li>
          <li><strong>Algorithmic Auditing</strong>: Mandate third‑party bias audits, ban opaque models in critical sectors, require continuous drift monitoring.</li>
          <li><strong>International Standards</strong>: Harmonize via UN bodies, cap AI emissions like industrial pollution under Paris Agreement.</li>
          <li><strong>Participatory Governance</strong>: Citizen assemblies, whistleblower protections, public comment on public‑service AI.</li>
          <li><strong>Data Sovereignty & Privacy</strong>: User data ownership, opt‑out rights, revenue‑sharing models (e.g. Alaska‑style tech dividend).</li>
        </ol>
      </TextSection>

      <TextSection title="Implementation Challenges & Counterarguments">
        <p><strong>Corporate Resistance:</strong> Tech giants claim “trade secrets”—rebut by public interest precedent (e.g. pharma trials).</p>
        <p><strong>Enforcement Gaps:</strong> Global coordination is hard—leverage trade agreements to condition market access on compliance.</p>
      </TextSection>

      <TextSection title="Conclusion">
        <p>
          AI’s promise must be balanced against its hidden costs. Ethical oversight, radical transparency,
          and systemic accountability are not optional—they’re requisite for sustainable, equitable AI.
          Only by confronting these costs head‑on can we ensure AI fulfills its transformative potential
          without sacrificing social or environmental integrity.
        </p>
      </TextSection>

      <TextSection title="Bibliography">
        <ul className="list-disc pl-5 space-y-1">
          <li>Benjamin, Ruha. <em>Race After Technology.</em> Polity Press, 2019.</li>
          <li>Bostrom, Nick, and Eliezer Yudkowsky. “The Ethics of Artificial Intelligence.”</li>
          <li>Bostrom, Nick. <em>Superintelligence: Paths, Dangers, Strategies.</em> Oxford University Press, 2014.</li>
          <li>Christian, Brian. <em>The Alignment Problem.</em> W.W. Norton & Company, 2020.</li>
          <li>Crawford, Kate, and Vladan Joler. “Anatomy of an AI System,” 2018.</li>
          <li>Lantz, Frank. <em>Universal Paperclips.</em> Game, 2017.</li>
          <li>O’Neil, Cathy. <em>Weapons of Math Destruction.</em> Crown Publishing Group, 2016.</li>
          <li>Zuboff, Shoshana. <em>The Age of Surveillance Capitalism.</em> PublicAffairs, 2019.</li>
        </ul>
      </TextSection>

      <FooterCTA
        ctaText="Learn how to take action"
        onClick={() => window.open('https://www.forbes.com/councils/forbestechcouncil/2025/03/27/breaking-the-planet-to-build-the-future-can-ais-environmental-price-be-mollified/', '_blank')}
      />
    </div>
  );
};

export default App;
