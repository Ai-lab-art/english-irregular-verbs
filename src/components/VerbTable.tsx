import { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { irregularVerbs, type IrregularVerb } from "@/data/irregularVerbs";

export const VerbTable = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredVerbs = useMemo(() => {
    const term = searchTerm.toLowerCase();
    return irregularVerbs.filter(
      (verb) =>
        verb.v1.toLowerCase().includes(term) ||
        verb.v2.toLowerCase().includes(term) ||
        verb.v3.toLowerCase().includes(term) ||
        verb.nepaliMeaning.toLowerCase().includes(term)
    );
  }, [searchTerm]);

  return (
    <div className="w-full">
      <div className="mb-6 relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
        <Input
          type="text"
          placeholder="Search verbs... (अनियमित क्रिया खोज्नुहोस्)"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10 h-12 text-base"
        />
      </div>

      <div className="rounded-lg border border-border overflow-hidden bg-card shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-primary text-primary-foreground">
                <th className="px-4 py-3 text-left text-sm font-semibold">V1 (Base)</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">V2 (Past)</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">V3 (P. Participle)</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">V4 (Gerund)</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">V5 (3rd Person)</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">Pronunciation</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">नेपाली अर्थ</th>
              </tr>
            </thead>
            <tbody>
              {filteredVerbs.map((verb, index) => (
                <tr
                  key={`${verb.v1}-${index}`}
                  className="border-b border-border hover:bg-muted/50 transition-colors"
                >
                  <td className="px-4 py-3 font-medium text-foreground">{verb.v1}</td>
                  <td className="px-4 py-3 text-foreground">{verb.v2}</td>
                  <td className="px-4 py-3 text-foreground">{verb.v3}</td>
                  <td className="px-4 py-3 text-muted-foreground">{verb.v4}</td>
                  <td className="px-4 py-3 text-muted-foreground">{verb.v5}</td>
                  <td className="px-4 py-3 text-accent font-mono text-sm">{verb.pronunciation}</td>
                  <td className="px-4 py-3 text-foreground">{verb.nepaliMeaning}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-4 text-center text-sm text-muted-foreground">
        Showing {filteredVerbs.length} of {irregularVerbs.length} verbs
      </div>
    </div>
  );
};
