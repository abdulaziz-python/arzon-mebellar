import React from 'react'
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';

export default function FAQ() {
  return (
    <section className='FAQ'>
      <div className="container">
        <h2 className="tittle mb-5">Часто задаваемые <span>вопросы</span></h2>
        <Accordion>
          <AccordionItem>
              <AccordionItemHeading>
                  <AccordionItemButton>
                    Какая у Вас предоплата?
                  </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                  <p>
                    После замера и утверждения дизайн-проекта нужно внести предоплату от 50 до 70%.
                  </p>
              </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
              <AccordionItemHeading>
                  <AccordionItemButton>
                    Какие у Вас сроки изготовления мебели? 
                  </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                  <p>
                    Срок изготовления зависит от сложности проекта и обычно составляет от 25 до 30 дней.
                  </p>
              </AccordionItemPanel>
          </AccordionItem>

          <AccordionItem>
              <AccordionItemHeading>
                  <AccordionItemButton>
                    Как можно посмотреть образцы если я не могу определиться с цветом мебели? 
                  </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                  <p>
                    После того как определимся с точными размерами мы можем предоставить Вам образцы, у нас огромный выбор цветовой палитры, а также фактуры.
                  </p>
              </AccordionItemPanel>
          </AccordionItem>

          <AccordionItem>
              <AccordionItemHeading>
                  <AccordionItemButton>
                  Если у нас уже есть проект, можно получить расчет по нашему проекту? 
                  </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                  <p>
                  Да конечно, мы предоставим Вам расчет по Вашему проекту в течении 24 часов.
                  </p>
              </AccordionItemPanel>
          </AccordionItem>

        </Accordion>
      </div>
    </section>
  )
}
