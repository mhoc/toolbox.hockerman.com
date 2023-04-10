import { BaseEncodingTool } from "./BaseEncodingTool";
import { IDGeneratorTool } from "./IDGeneratorTool";
import { JWTDecoderTool } from "./JWTDecoderTool";

export interface Tool {
  category: string;
  component: React.FC<{}>;
  description: string;
  icon: React.FC<any>;
  name: string;
}

export interface Category {
  category: string;
  tools: Tool[];
}

export class Toolset {
  public static readonly ALL_TOOLS: Tool[] = [
    BaseEncodingTool,
    JWTDecoderTool,
    IDGeneratorTool,
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
    return Object.keys(categoryMap).map((cat) => ({
      category: cat,
      tools: categoryMap[cat],
    }));
  }

  public byName(name: string): Tool | undefined {
    return this._tools.find((t) => t.name === name);
  }

  public search(searchTerm: string): Toolset {
    const searchTermLc = searchTerm.toLowerCase();
    return new Toolset(
      this._tools.filter((t) => {
        return (
          t.category.toLowerCase().includes(searchTermLc) ||
          t.description.toLowerCase().includes(searchTermLc) ||
          t.name.toLowerCase().includes(searchTermLc)
        );
      })
    );
  }
}
