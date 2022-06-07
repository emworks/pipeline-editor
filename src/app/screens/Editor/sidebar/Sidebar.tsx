import { FC, useEffect } from 'react'
import { QueryNodeItem, ReaderNodeItem, RetrieverNodeItem } from './SidebarItem'

type SidebarProps = {
  drag: (event: any) => void
  drop: (event: any) => void
  positionMobile: (event: any) => void
}

export const Sidebar: FC<SidebarProps> = ({ drag, drop, positionMobile }) => {
  useEffect(() => {
    const elements = document.getElementsByClassName('drag-drawflow')
    for (let i = 0; i < elements.length; i++) {
      elements[i].addEventListener('touchend', drop, false)
      elements[i].addEventListener('touchmove', positionMobile, false)
      elements[i].addEventListener('touchstart', drag, false)
    }
    return () => {
      for (let i = 0; i < elements.length; i++) {
        elements[i].removeEventListener('touchend', drop)
        elements[i].removeEventListener('touchmove', positionMobile)
        elements[i].removeEventListener('touchstart', drag)
      }
    }
  }, [])

  return (
    <div className='sidebar'>
      <QueryNodeItem onDragStart={drag} />
      <RetrieverNodeItem onDragStart={drag} />
      <ReaderNodeItem onDragStart={drag} />
    </div>
  )
}

export default Sidebar
