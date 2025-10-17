import { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, X } from "lucide-react";
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
    <div className="w-full px-2 sm:px-4">
      <div className="mb-4 sm:mb-6 relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4 sm:h-5 sm:w-5" />
        <Input
          type="text"
          placeholder="Search verbs..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-9 sm:pl-10 pr-10 h-10 sm:h-12 text-sm sm:text-base"
        />
        {searchTerm && (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setSearchTerm("")}
            className="absolute right-1 top-1/2 transform -translate-y-1/2 h-7 w-7 sm:h-8 sm:w-8 p-0"
          >
            <X className="h-3 w-3 sm:h-4 sm:w-4" />
          </Button>
        )}
      </div>

      <div className="rounded-lg border border-border overflow-hidden bg-card shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[640px]">
            <thead>
              <tr className="bg-primary text-primary-foreground">
                <th className="px-2 sm:px-4 py-2 sm:py-3 text-center text-xs sm:text-sm font-semibold sticky left-0 bg-primary z-10">S.N.</th>
                <th className="px-2 sm:px-4 py-2 sm:py-3 text-left text-xs sm:text-sm font-semibold">V1</th>
                <th className="px-2 sm:px-4 py-2 sm:py-3 text-left text-xs sm:text-sm font-semibold">V2</th>
                <th className="px-2 sm:px-4 py-2 sm:py-3 text-left text-xs sm:text-sm font-semibold">V3</th>
                <th className="px-2 sm:px-4 py-2 sm:py-3 text-left text-xs sm:text-sm font-semibold">V4</th>
                <th className="px-2 sm:px-4 py-2 sm:py-3 text-left text-xs sm:text-sm font-semibold">V5</th>
                <th className="px-2 sm:px-4 py-2 sm:py-3 text-left text-xs sm:text-sm font-semibold">Pronunciation</th>
                <th className="px-2 sm:px-4 py-2 sm:py-3 text-left text-xs sm:text-sm font-semibold">नेपाली अर्थ</th>
              </tr>
            </thead>
            <tbody>
              {filteredVerbs.map((verb, index) => (
                <tr
                  key={`${verb.v1}-${index}`}
                  className="border-b border-border hover:bg-muted/50 transition-colors"
                >
                  <td className="px-2 sm:px-4 py-2 sm:py-3 text-center text-xs sm:text-sm text-muted-foreground sticky left-0 bg-card z-10">{index + 1}</td>
                  <td className="px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm font-medium text-foreground">{verb.v1}</td>
                  <td className="px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm text-foreground">{verb.v2}</td>
                  <td className="px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm text-foreground">{verb.v3}</td>
                  <td className="px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm text-muted-foreground">{verb.v4}</td>
                  <td className="px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm text-muted-foreground">{verb.v5}</td>
                  <td className="px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm text-accent font-mono">{verb.pronunciation}</td>
                  <td className="px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm text-foreground">{verb.nepaliMeaning}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-3 sm:mt-4 text-center text-xs sm:text-sm text-muted-foreground">
        Showing {filteredVerbs.length} of {irregularVerbs.length} verbs
      </div>
    </div>
  );
};
