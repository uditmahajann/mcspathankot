import type React from "react"
import { ReceiptIndianRupee, RefreshCw, FileText, CircleCheck, Check, Info, ArrowRight } from "lucide-react"
import CtaButton from "../../interface/CtaButton";

const TransferCertificate: React.FC = () => {
  // TC process steps
  const tcSteps = [
    {
      title: "Submission of Application",
      description: "Parents or guardians are required to submit a formal written request for the issuance of a Transfer Certificate to the school office.",
      icon: FileText,
      color: "bg-green-100 border-green-200",
    },
    {
      title: "Departmental Clearance",
      description:
        "The student must obtain the necessary clearance from all relevant departments, including the library, laboratories, sports department, and accounts office.",
      icon: CircleCheck,
      color: "bg-rose-100 border-rose-200",
    },
    {
      title: "Settlement of Dues",
      description: "All outstanding fees and financial obligations must be cleared before the Transfer Certificate can be issued.",
      icon: ReceiptIndianRupee,
      color: "bg-yellow-100 border-yellow-200",
    },
    {
      title: "Processing Time",
      description: "Once all formalities have been completed, the Transfer Certificate will ordinarily be issued within seven working days.",
      icon: RefreshCw,
      color: "bg-purple-100 border-purple-200",
    },
  ]

  // Required documents
  const requiredDocuments = [
    "A written application from the parent or guardian requesting the TC",
    "A duly signed clearance form from all concerned departments",
    "Receipt confirming payment of fees for the current quarter",
    "Original admission receipt",
    "Student Identity Card",
  ]

  return (
    <section id="transfer-certificate" className="relative bg-white py-4 sm:py-10 my-10">
      <div className="container mx-auto max-w-7xl px-5 min-[540px]:px-12 sm:px-16 lg:px-20">
        {/* What is a TC */}
        <div className="bg-sky-50 rounded-2xl p-8 lg:p-12 shadow-md mb-12 lg:mb-16 xl:mb-20">
          <h3 className="text-xl lg:text-2xl font-poppins font-semibold text-gray-900 mb-8 tracking-wide">What is a Transfer Certificate?</h3>
          <p className="text-gray-700 mb-3 font-inter text-base xl:text-lg">
            A <b>Transfer Certificate (TC)</b> is an official document issued by the school when a student leaves the institution to continue their education elsewhere. It serves as formal verification of the student’s academic record, conduct, and period of enrolment at the school.
          </p>
          <p className="text-gray-700 mb-3 font-inter text-base xl:text-lg">
            This document is generally required for admission to another school or educational institution and is issued in accordance with the regulations prescribed by the <b>Central Board of Secondary Education (CBSE)</b>.
          </p>
          <p className="text-gray-700 font-inter mb-9 text-base xl:text-lg">
            At <b>Montessori Cambridge School</b>, we ensure that the process of issuing Transfer Certificates is handled with efficiency and care, ensuring a smooth transition for our students and their families.
          </p>
          <div className="flex items-center justify-start">
            <CtaButton text="Get Transfer Certificate" href="https://forms.edunexttechnologies.com/website-service/mcsp/transfer-certificate/" icon={ArrowRight} />
          </div>
        </div>

        {/* TC Process Steps */}
        <div className="text-center my-8 sm:my-10">
          <h2 className="text-2xl min-[540px]:text-3xl text-gray-900 font-playpen font-medium leading-normal">
            Procedure for <span className="relative inline-block">Obtaining
              <img
                src="/Images/Doodles/LineBlue.png"
                alt="Underline"
                className="absolute w-[90%] -bottom-4"
              />
            </span> a Transfer Certificate
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 mb-12 lg:mb-16">
          {tcSteps.map((step, index) => {
            const Icon = step.icon
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="flex w-12 h-12 items-center justify-center rounded-full bg-secondarylight text-secondary mb-4">
                  <Icon className="w-6 h-6 shrink-0" />
                </div>
                <div className="flex items-center mb-2">
                  <h3 className="text-lg font-poppins font-bold text-gray-900 tracking-wide">{index + 1}. {step.title}</h3>
                </div>
                <p className="text-gray-700 font-inter">{step.description}</p>
              </div>
            )
          })}
        </div>

        {/* Required Documents */}
        <div className="bg-white rounded-xl lg:rounded-2xl shadow-lg overflow-hidden border border-gray-100 mb-12 lg:mb-16">
          <div className="bg-primarydark p-5">
            <h3 className="mb-1 text-lg sm:text-xl font-poppins font-bold text-white tracking-wide">Required Documents</h3>
            <p className="text-blue-100 text-sm sm:text-base font-inter">Parents are requested to submit the following documents while applying for a Transfer Certificate:</p>
          </div>
          <div className="p-6">
            <ul className="space-y-4">
              {requiredDocuments.map((document, index) => (
                <li key={index} className="flex items-center">
                  <Check className="w-5 h-5 shrink-0 text-green-600 mr-2" />
                  <span className="text-gray-700 font-inter">{document}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Important Information */}
          <div className="bg-white rounded-xl lg:rounded-2xl shadow-lg overflow-hidden border border-gray-100 mb-12 lg:mb-16">
            <div className="bg-primarydark p-5">
            <h3 className="mb-1 text-lg sm:text-xl font-poppins font-bold text-white tracking-wide">Important Information</h3>
            <p className="text-blue-100 text-sm sm:text-base font-inter">General guidelines that governs the Transfer Certificate Issuance:</p>
          </div>
           <div className="p-6">
            <ul className="space-y-3">
              <li className="flex items-start">
                <Info className="w-5 h-5 shrink-0 text-secondary mr-2 mt-1" />
                <span className="text-gray-700 font-inter">
                  The Transfer Certificate will be issued in the name recorded in the student’s admission documents.
                </span>
              </li>
              <li className="flex items-start">
                <Info className="w-5 h-5 shrink-0 text-secondary mt-1 mr-2" />
                <span className="text-gray-700 font-inter">
                  Any discrepancy in the name or personal details should be reported to the school administration promptly for correction prior to issuance.
                </span>
              </li>
              <li className="flex items-start">
                <Info className="w-5 h-5 shrink-0 text-secondary mt-1 mr-2" />
                <span className="text-gray-700 font-inter">
                  The Transfer Certificate is issued only once. In case of loss, a duplicate TC may be issued upon submission of a copy of the FIR along with the prescribed administrative fee.
                </span>
              </li>
              <li className="flex items-start">
                <Info className="w-5 h-5 shrink-0 text-secondary mt-1 mr-2" />
                <span className="text-gray-700 font-inter">
                  The Transfer Certificate must be collected in person by the parent or authorised guardian from the school office.
                </span>
              </li>
            </ul>
          </div>
          </div>
      </div>
    </section>
  )
}

export default TransferCertificate