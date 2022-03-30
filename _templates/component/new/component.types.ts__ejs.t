---
to: src/components/<%= name %>/<%= name %>.types.ts
---
import { ReactNode } from 'react'

export interface <%=name%>Props {
  /**
   * React children
   * */
  children: ReactNode;
}
