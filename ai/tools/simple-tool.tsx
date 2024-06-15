import { createRunnableUI } from "@/utils/server";
import { DynamicStructuredTool } from "@langchain/core/tools";
import { z } from "zod";

export const simpleTool = new DynamicStructuredTool({
  name: "get_tilt_legal_data",
  description:
    "A tool to fetch the legal data for a company, given a company name e.g. TILT Legal.",
  schema: z.object({
    company: z.string().describe("The company name to get data for"),
  }),
  func: async (input, config) => {
    const stream = await createRunnableUI(
      config,

      <div className="">Loading...</div>
    );
    //   sleep for 5 seconds
    await new Promise((resolve) => setTimeout(resolve, 5000));
    stream.done(<div className="">TILT Legal tool return</div>);
    return JSON.stringify(
      "TILT Legal is a legal technology implementation consultancy that specialises in developing solutions using the Microsoft 365 ecosystem.",
      null
    );
  },
});
