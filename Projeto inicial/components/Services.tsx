
import React from 'react';
import Section from './Section';
import ServiceCard from './ServiceCard';
import { BriefcaseIcon, AcademicCapIcon, BuildingOffice2Icon } from './icons';

const servicesData = [
  {
    icon: <BriefcaseIcon />,
    title: 'Bar Completo para Eventos',
    description: 'Estrutura de bar, bartenders profissionais, drinks clássicos e personalizados para tornar seu evento inesquecível.',
  },
  {
    icon: <AcademicCapIcon />,
    title: 'Consultoria de Bar',
    description: 'Otimização de cardápios, treinamento de equipe de alta performance e gestão eficiente de estoque para seu negócio.',
    highlight: true,
  },
  {
    icon: <BuildingOffice2Icon />,
    title: 'Eventos Corporativos',
    description: 'Soluções de bar elegantes e personalizadas para eventos empresariais, lançamentos e confraternizações.',
  },
];

const Services: React.FC = () => {
  return (
    <Section id="servicos" className="bg-neutral-900" title="NOSSOS SERVIÇOS">
      <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
        {servicesData.map((service, index) => (
          <ServiceCard
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
            highlight={service.highlight}
          />
        ))}
      </div>
      <p className="text-center text-gray-400 mt-16 text-lg">
        E muito mais! <a href="#contato" className="text-yellow-400 hover:text-yellow-300 font-semibold">Entre em contato</a> para um orçamento personalizado e surpreenda-se.
      </p>
    </Section>
  );
};

export default Services;
