import Link from 'next/link'

import { IconX } from '@tabler/icons-react'
import dayjs from 'dayjs'

import { Dot } from '@/components/blocks/resume'
import { Typed, TypedContent, TypedText } from '@/components/typed'

export default function Page() {
  return (
    <div className='flex min-h-svh items-center justify-center bg-[#282935] p-4'>
      <main className='flex max-h-[90svh] max-w-[65ch] flex-1 flex-col overflow-hidden rounded-2xl border border-gray-600 shadow-2xl shadow-black'>
        <header className='grid h-11 flex-none grid-cols-[1fr_2fr_1fr] items-center border-b border-gray-800 bg-zinc-700 px-4 text-xs font-semibold'>
          <span className='flex gap-2'>
            <Link aria-label='Back to home page' href='/'>
              <Dot className='group relative flex items-center justify-center bg-red-500 before:absolute before:-inset-4 before:content-["_"]'>
                <IconX className='invisible size-2.5 group-hover:visible' />
              </Dot>
            </Link>
            <Dot className='cursor-not-allowed bg-yellow-400' />
            <Dot className='cursor-not-allowed bg-green-500' />
          </span>
          <span className='text-center text-gray-400'>
            binwenwu@MacBook-Pro:~
          </span>
          <span className='text-end text-gray-500'>⌥⌘1</span>
        </header>
        <div className='min-h-60 flex-1 overflow-y-auto p-2 text-sm text-gray-200 duration-300 animate-in fade-in'>
          <p className='mb-2'>
            Last login: {dayjs().format('ddd MMM DD HH:mm:ss')} on ttys003
          </p>
          <Typed>
            <TypedText>whoami</TypedText>
            <TypedContent>
              <p>
                Hi, I&apos;m <strong>Binwen</strong>, in Chinese my name is{' '}
                <strong>斌文</strong>.
              </p>
              <p>
                I am currently a college student and have been immersed in the
                world of computer science since <strong>2020</strong>, focusing
                on honing my programming and software development skills. My
                passion lies in developing elegant and efficient solutions for
                complex problems.
              </p>
              <p>
                I have amassed substantial practical experience in the{' '}
                <code>Spark</code> technology stack.
              </p>
            </TypedContent>
            <TypedText afterDelay={1000}>ls</TypedText>
            <TypedContent>
              <div className='grid grid-cols-2 gap-2 px-4 font-semibold text-sky-500'>
                <span>opensource</span>
                <span>projects</span>
                <span>blog-info</span>
                <span>experience</span>
                <span>skills</span>
                <span>contact</span>
              </div>
            </TypedContent>
            <TypedText afterDelay={700}>opensource</TypedText>
            <TypedContent>
              <p>
                I am passionate about contributing to the open-source community,
                having made multiple contributions to well-known projects such
                as <code>Ant Design</code>.
              </p>
              <p>
                Additionally, I have developed and maintained lots of
                open-source projects, which have been successfully published on
                github.
              </p>
            </TypedContent>
            <TypedText afterDelay={1000}>projects</TypedText>
            <TypedContent>
              <ul>
                <li>
                  <strong>
                    <a href='https://github.com/binwenwu/3DSIM_WEB'>
                      3dsim_web
                    </a>
                  </strong>
                </li>
                <li>A webgis systems based on 3DSIM CM.</li>
              </ul>
              <ul>
                <li>
                  <strong>
                    <a href='https://github.com/binwenwu/hexo-theme-tank'>
                      hexo-theme-tank
                    </a>
                  </strong>
                </li>
                <li>A hexo blog theme</li>
              </ul>
              <ul>
                <li>
                  <strong>
                    <a href='https://github.com/binwenwu/3DSIM_3DGeoVolumesAPI'>
                      3DSIM_3DGeoVolumesAPI
                    </a>
                  </strong>
                </li>
                <li>A RESTful API for 3DGeoVolumes based on 3DSIM CM.</li>
              </ul>
              <ul>
                <li>
                  <strong>
                    <a href='https://github.com/binwenwu/Font-Pack-Compression'>
                      Font-Pack-Compression
                    </a>
                  </strong>
                </li>
                <li>A tool for compressing font packs</li>
              </ul>
            </TypedContent>
            <TypedText>blog-info</TypedText>
            <TypedContent>
              <p>
                I am keen on sharing knowledge as well as writing articles and
                tutorials regularly, covering <code>Spark</code>,
                <code>Docker</code>, <code>K8S</code> source-code,{' '}
                <code>CSS</code>, and animation.
              </p>
              <p>
                My articles have been read over <i>15,000</i> times. I primarily
                I primarily wrote in Chinese, but currently, my goal is to write
                articles in English.
              </p>
            </TypedContent>
            <TypedText>Education</TypedText>
            <TypedContent>
              <p>
                I am currently studying at <strong>Wuhan University</strong>,
                majoring in 
                <strong>Computer Science</strong>.
              </p>
              <p>
                I have a solid foundation in computer science and have taken
                courses in <code>data structures</code>, <code>algorithms</code>
                ,<code>operating systems</code>, and{' '}
                <code>computer networks</code>.
              </p>
            </TypedContent>
            <TypedText>Contact</TypedText>
            <TypedContent>
              <div className='my-4 flex items-center'>
                <p className='basis-1/4 text-center font-semibold'>Social</p>
                <div className='grid flex-1 grid-cols-2 justify-items-start gap-2'>
                  <a href='https://github.com/binwenwu'>Github</a>
                  <a href='https://juejin.cn/user/165361397016000'>掘金</a>
                </div>
              </div>
              <div className='flex items-center'>
                <p className='basis-1/4 text-center font-semibold'>Email</p>
                <a href='mailto:binwenwu@whu.edu.cn'>binwenwu@whu.edu.cn</a>
              </div>
            </TypedContent>
          </Typed>
        </div>
      </main>
    </div>
  )
}
