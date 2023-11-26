import { DNSResolverTool } from "./DNSResolver/DNSResolver";
import { HashingTool } from "./Hashing/Hashing";
import { IDGeneratorTool } from "./IDGeneratorTool";
import { JWT } from "./JWT";
import { EncodingTool } from "./Encoding/Encoding";

export interface Tool {
  category: string;
  component: React.FC<{}>;
  description: string;
  icon: React.FC<any>;
  name: string;
  key: string;
}

export interface Category {
  category: string;
  tools: Tool[];
}

export class Toolset {
  public static readonly ALL_TOOLS: Tool[] = [
    DNSResolverTool,
    EncodingTool,
    HashingTool,
    IDGeneratorTool,
    JWT,
  ];

  private readonly _tools: Tool[];

  constructor(tools?: Tool[]) {
    if (tools) {
      this._tools = tools;
    } else {
      this._tools = Toolset.ALL_TOOLS;
    }
  }

  public byCategory(): Category[] {
    const categoryMap: Record<string, Tool[]> = {};
    for (const tool of this._tools) {
      if (categoryMap[tool.category]) {
        categoryMap[tool.category].push(tool);
      } else {
        categoryMap[tool.category] = [tool];
      }
    }
    return Object.keys(categoryMap)
      .map((cat) => ({
        category: cat,
        tools: categoryMap[cat],
      }))
      .sort((a, b) => {
        return a.category.localeCompare(b.category);
      });
  }

  public byKey(key: string): Tool | undefined {
    return this._tools.find((t) => t.key === key);
  }

  public search(searchTerm: string): Toolset {
    const searchTermLc = searchTerm.toLowerCase();
    return new Toolset(
      this._tools.filter((t) => {
        return (
          t.category.toLowerCase().includes(searchTermLc) ||
          t.description.toLowerCase().includes(searchTermLc) ||
          t.name.toLowerCase().includes(searchTermLc) ||
          t.key.toLowerCase().includes(searchTermLc)
        );
      })
    );
  }
}
