import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: 'ما هي دقة تحليل كثافة خط الدم؟',
    answer: 'يوفر نظامنا دقة تصل إلى 98.7٪ في قياسات كثافة خط الدم، مع التحقق من النتائج من خلال مقارنتها مع القياسات المخبرية التقليدية.'
  },
  {
    question: 'كم من الوقت يستغرق التحليل؟',
    answer: 'يتم التحليل في غضون ثوانٍ معدودة بفضل خوارزميات الذكاء الاصطناعي المتقدمة لدينا. ستتلقى النتائج والتقرير التفصيلي فور اكتمال التحليل.'
  },
  {
    question: 'هل يمكنني تحليل عدة صور في وقت واحد؟',
    answer: 'نعم، يدعم نظامنا تحليل ملفات PDF متعددة الصفحات وكذلك تحميل عدة صور في نفس الوقت للتحليل المتزامن.'
  },
  {
    question: 'ما هي أنواع الملفات المدعومة؟',
    answer: 'نحن ندعم صور PNG وJPG وWEBP للتحميل المباشر، بالإضافة إلى ملفات PDF. يجب أن تكون الصور واضحة وبدقة عالية للحصول على أفضل النتائج.'
  },
  {
    question: 'هل يمكنني تصدير نتائج التحليل؟',
    answer: 'نعم، يمكنك تحميل تقرير مفصل بصيغة PDF يتضمن نتائج التحليل والرسوم البيانية والإحصائيات الرئيسية.'
  },
  {
    question: 'هل النظام آمن لاستخدام البيانات الطبية؟',
    answer: 'نعم، نظامنا يتوافق مع معايير أمان البيانات الطبية ويستخدم تشفيرًا متقدمًا لحماية جميع المعلومات والصور المحملة.'
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">الأسئلة الشائعة</h2>
        
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 text-right flex items-center justify-between"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-gray-900">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-gray-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-4 text-right">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;