import { Tabs } from '@mantine/core'
import { Dispatch, SetStateAction, useState } from 'react'
import { Branch } from '@queries'

interface BranchTabsProps {
  branches: Branch[]
  setSelectedObjectId: Dispatch<SetStateAction<string | null>>
}

export const BranchTabs = (props: BranchTabsProps) => {
  const { branches, setSelectedObjectId} = props
  const [activeTab, setActiveTab] = useState<string | null>(null)

  const handleChange = (value: string | null) => {
    setActiveTab(value)
    // @ts-ignore
    setSelectedObjectId(branches?.find(branch => branch.name === value)?.commits?.items[0].referencedObject)
  }

  return (
    <Tabs value={activeTab} onChange={handleChange}>
      <Tabs.List>
        {branches?.map(branch => <Tabs.Tab value={branch.name}>{branch.name}</Tabs.Tab>)}
      </Tabs.List>
    </Tabs>
  )
}