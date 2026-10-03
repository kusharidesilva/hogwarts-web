import { PageTransition } from "@/components/ambient-interactions";
export default function Template({ children }: { children: React.ReactNode }) { return <PageTransition>{children}</PageTransition>; }
