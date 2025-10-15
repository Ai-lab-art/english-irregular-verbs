import { VerbTable } from "@/components/VerbTable";
import { BookOpen } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <header className="bg-primary text-primary-foreground py-8 px-4 shadow-lg">
        <div className="container mx-auto max-w-7xl">
          <div className="flex items-center justify-center gap-3 mb-2">
            <BookOpen className="h-10 w-10" />
            <h1 className="text-4xl font-bold">English Irregular Verbs</h1>
          </div>
          <p className="text-center text-primary-foreground/90 text-lg">
            अंग्रेजी अनियमित क्रियाहरूको पूर्ण सूची
          </p>
        </div>
      </header>

      <main className="container mx-auto max-w-7xl px-4 py-8">
        <div className="mb-6 bg-card p-6 rounded-lg border border-border shadow-sm">
          <h2 className="text-xl font-semibold mb-2 text-foreground">About Irregular Verbs</h2>
          <p className="text-muted-foreground leading-relaxed">
            This comprehensive chart contains over 140 common English irregular verbs with all their forms (V1-V5),
            pronunciation guides, and Nepali translations. Use the search bar to quickly find any verb you're
            looking for. Perfect for students, teachers, and language learners!
          </p>
          <p className="text-muted-foreground mt-2 leading-relaxed">
            यो तालिकामा १४० भन्दा बढी अंग्रेजी अनियमित क्रियाहरू तिनीहरूका सबै रूपहरू (V1-V5), उच्चारण र नेपाली अर्थ सहित
            समावेश छन्।
          </p>
        </div>

        <VerbTable />
      </main>

      <footer className="bg-muted py-6 px-4 mt-12">
        <div className="container mx-auto max-w-7xl text-center text-muted-foreground">
          <p>© 2025 English Irregular Verbs Reference | A comprehensive learning resource</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
