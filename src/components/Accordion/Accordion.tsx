import React from 'react'
import './Accordion.css'

interface AccordionItem {
  id: string
  question: string
  answer: string
}

interface AccordionProps {
  items: AccordionItem[]
}

interface AccordionItemProps {
  item: AccordionItem
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  return (
    <div className="accordion">
      {items.map((item, index, array) => (
        <React.Fragment key={item.id}>
          <AccordionItem item={item} />
          {index !== array.length - 1 && <hr />}
        </React.Fragment>
      ))}
    </div>
  )
}

const AccordionItem: React.FC<AccordionItemProps> = ({ item }) => {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <div className="accordion-item">
      <div className="accordion-item__title" onClick={() => setIsOpen(!isOpen)}>
        <h3>{item.question}</h3>
        <img
          src={isOpen ? '/assets/icon-minus.svg' : '/assets/icon-plus.svg'}
          alt="toggle view button"
        />
      </div>

      <p className={isOpen ? 'active' : undefined}>{item.answer}</p>
    </div>
  )
}

export default Accordion
