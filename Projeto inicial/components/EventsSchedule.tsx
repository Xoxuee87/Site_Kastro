import React, { useState } from 'react';
import Section from './Section';
import { ChevronDownIcon } from './icons';

const mockMonths = [
  "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", 
  "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
];

const EventsSchedule: React.FC = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState("Todos os Meses");

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const handleMonthSelect = (month: string) => {
    setSelectedMonth(month);
    setDropdownOpen(false);
    // Add filtering logic here in the future
  };

  return (
    <Section id="eventos" className="bg-neutral-900" title="AGENDA DE EVENTOS PARA 2025">
      <div className="max-w-3xl mx-auto text-center">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <span className="text-gray-300">Filtrar por mês:</span>
          <div className="relative">
            <button 
              onClick={toggleDropdown}
              className="bg-gray-800 text-gray-200 px-4 py-2 rounded-lg flex items-center hover:bg-gray-700 transition-colors w-48 justify-between"
              aria-haspopup="true"
              aria-expanded={dropdownOpen}
            >
              {selectedMonth}
              <ChevronDownIcon className={`h-5 w-5 ml-2 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : 'rotate-0'}`} />
            </button>
            {dropdownOpen && (
              <div className="absolute top-full left-0 mt-1 w-48 bg-gray-800 rounded-lg shadow-xl z-10 py-1 max-h-60 overflow-y-auto">
                <button
                    onClick={() => handleMonthSelect("Todos os Meses")}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-200 hover:bg-gray-700 transition-colors"
                  >
                    Todos os Meses
                  </button>
                {mockMonths.map(month => (
                  <button
                    key={month}
                    onClick={() => handleMonthSelect(month)}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-200 hover:bg-gray-700 transition-colors"
                  >
                    {month}
                  </button>
                ))}
              </div>
            )}
          </div>
          <a
            href="#contato" 
            className="bg-yellow-400 text-black font-semibold py-2 px-6 rounded-lg hover:bg-yellow-500 transition-colors duration-300"
          >
            Ver Todos os Eventos
          </a>
        </div>
        <div className="bg-neutral-800 p-6 rounded-lg shadow-lg">
          <p className="text-gray-300 text-lg">
            Nossa agenda para 2025 está repleta de novidades! Em breve mais informações.
          </p>
          <p className="text-gray-400 mt-2">
            Selecione um mês para ver os eventos programados ou clique em "Ver Todos os Eventos". Para eventos privados ou corporativos, entre em contato.
          </p>
        </div>
      </div>
    </Section>
  );
};

export default EventsSchedule;