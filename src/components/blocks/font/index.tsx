import { tw } from 'tw-styled'

import { Block } from '@/components/blocks/block'

import { Toggle } from './toggle'

const AnimateSpan = tw.span`hidden origin-bottom-right text-sm transition-transform duration-700 group-hover:rotate-[360deg] lg:block xl:text-base`

export const Font = () => {
  return (
    <Block
      data-type='setting'
      className='group grid grid-cols-3 grid-rows-4 items-center justify-items-center bg-surface-1 text-lg font-semibold text-color-1 lg:grid-cols-5 lg:grid-rows-6'
    >
      <AnimateSpan className='block'>Aa</AnimateSpan>
      <AnimateSpan className='block'>b</AnimateSpan>
      <AnimateSpan className='block'>C</AnimateSpan>
      <AnimateSpan>Dd</AnimateSpan>
      <AnimateSpan>e</AnimateSpan>
      <AnimateSpan>f</AnimateSpan>
      <AnimateSpan>Gg</AnimateSpan>
      <AnimateSpan>H</AnimateSpan>
      <AnimateSpan>I</AnimateSpan>
      <AnimateSpan>j</AnimateSpan>
      <AnimateSpan>Kk</AnimateSpan>
      <Toggle />
      <AnimateSpan className='block'>Ll</AnimateSpan>
      <AnimateSpan className='block'>m</AnimateSpan>
      <AnimateSpan className='block'>N</AnimateSpan>
      <AnimateSpan>Oo</AnimateSpan>
      <AnimateSpan>p</AnimateSpan>
      <AnimateSpan>q</AnimateSpan>
      <AnimateSpan>Rr</AnimateSpan>
      <AnimateSpan>s</AnimateSpan>
      <AnimateSpan>T</AnimateSpan>
      <AnimateSpan>u</AnimateSpan>
      <AnimateSpan>Uu</AnimateSpan>
      <AnimateSpan>v</AnimateSpan>
      <AnimateSpan>W</AnimateSpan>
    </Block>
  )
}
