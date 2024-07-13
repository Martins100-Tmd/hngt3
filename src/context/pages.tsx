import { ReactNode, createContext, useState, useEffect } from 'react';

export const PageContext = createContext<any>(undefined as any);

interface PageProviderProps {
   children: ReactNode;
}

export const PageProvider = ({ children }: PageProviderProps) => {
   const [PageState, setPageState] = useState(1);

   useEffect(() => {
      console.log(PageState);
   }, [PageState]);

   return <PageContext.Provider value={{ PageState, setPageState }}>{children}</PageContext.Provider>;
};

export default PageContext;
