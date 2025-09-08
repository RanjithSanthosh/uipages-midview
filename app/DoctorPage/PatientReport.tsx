// 'use client';
// import React, { useState, useEffect } from "react";
// // import ReactQuill from "react-quill";
// import "react-quill/dist/quill.snow.css";

// import dynamic from 'next/dynamic';

// // Keep the CSS import as it is
// import 'react-quill/dist/quill.snow.css';

// // Dynamically import ReactQuill and disable Server-Side Rendering (SSR)
// const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

// export interface PatientInfo {
//   name: string;
//   id: string;
//   gender: string;
//   study: string;
//   referringDoctor: string;
//   patientType: string;
//   ageDOB: string;
//   modality: string;
//   date: string;
// }

// const formatsList = [
//   { label: "CT - Brain (Plain)", value: "ct-brain-plain" },
//   { label: "MRI - Spine", value: "mri-spine" },
//   { label: "Ultrasound - Abdomen", value: "ultrasound-abdomen" },
// ];

// interface PatientReportProps {
//   patient?: PatientInfo; // optional so component can be reused standalone
//   onBack?: () => void;
// }

// const PatientReport: React.FC<PatientReportProps> = ({ patient, onBack }) => {
//   const [reportTemplates] = useState<Record<string, string>>({
//     "ct-brain-plain": `
// <b>CLINICAL HISTORY</b>
// <br/><br/>
// <b>FINDINGS:</b>
// <ul>
// <li>No obvious intracranial hemorrhage, mass, mass effect or midline shift.</li>
// <li>The cerebral hemispheres and basal ganglia demonstrate normal attenuation without focal abnormality.</li>
// <li>The cerebellar hemispheres and brain stem are unremarkable.</li>
// <li>The cerebello-pontine angles appear normal.</li>
// <li>The ventricles, sulci and basal cisterns are unremarkable.</li>
// <li>The calvarium is unremarkable. No obvious fracture.</li>
// <li>The mastoid air cells and visualized paranasal sinuses are clear.</li>
// </ul>
// <b>IMPRESSION:</b><br/>
// No intracranial hemorrhage, mass, mass effect or midline shift.
//     `,
//     "mri-spine": "<b>CLINICAL HISTORY:</b> Spine MRI normal...",
//     "ultrasound-abdomen": "<b>CLINICAL HISTORY:</b> Ultrasound abdomen normal...",
//   });

//   const defaultPatient: PatientInfo = {
//     name: patient?.name ?? "Unknown",
//     id: patient?.id ?? "-",
//     gender: patient?.gender ?? "-",
//     study: patient?.study ?? "-",
//     referringDoctor: patient?.referringDoctor ?? "Test",
//     patientType: patient?.patientType ?? "Outpatient",
//     ageDOB: patient?.ageDOB ?? "",
//     modality: patient?.modality ?? "-",
//     date: patient?.date ?? "",
//   };

//   const [selectedFormat, setSelectedFormat] = useState<string>("ct-brain-plain");
//   const [reportContent, setReportContent] = useState<string>(
//     reportTemplates["ct-brain-plain"]
//   );

//   useEffect(() => {
//     // Optional: auto-switch template based on patient study/modality
//   }, [patient]);

//   const handleFormatChange = (formatValue: string) => {
//     setSelectedFormat(formatValue);
//     setReportContent(reportTemplates[formatValue] ?? "");
//   };

//   const handleSave = () => {
//     alert("Report saved!");
//   };

//   const handleSend = () => {
//     alert("Report sent!");
//   };

//   const handlePreview = () => {
//     const previewWindow = window.open("", "Preview", "width=900,height=700");
//     if (previewWindow) {
//       previewWindow.document.open();
//       previewWindow.document.write(`
//         <html>
//           <head>
//             <title>Report Preview</title>
//             <meta name="viewport" content="width=device-width,initial-scale=1" />
//             <style>
//               body { font-family: Arial, Helvetica, sans-serif; padding: 20px; }
//               h1 { font-size: 18px; margin-bottom: 8px; }
//             </style>
//           </head>
//           <body>
//             <h1>Patient Report — ${defaultPatient.name} (${defaultPatient.id})</h1>
//             <div>${reportContent}</div>
//           </body>
//         </html>
//       `);
//       previewWindow.document.close();
//     } else {
//       alert("Unable to open preview window (popup blocked).");
//     }
//   };

//   return (
//     <div className="p-6 bg-gray-100">
//       {onBack && (
//         <div className="mb-4">
//           <button
//             onClick={onBack}
//             className="text-blue-600 hover:underline"
//             title="Back to table"
//           >
//             ← Back
//           </button>
//         </div>
//       )}

//       <div className="w-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg shadow-md p-5 mb-6">
//         <h1 className="text-2xl font-bold text-white tracking-wide">
//           Active Study Detail — <span className="italic">{defaultPatient.name}</span>
//         </h1>
//       </div>

//       <div className="bg-white shadow-md rounded-lg overflow-hidden mb-4">
//         <table className="w-full text-sm border-collapse">
//           <tbody>
//             <tr className="border-b">
//               <td className="p-2 font-medium">Patient Name</td>
//               <td className="p-2 text-blue-600">{defaultPatient.name}</td>
//               <td className="p-2 font-medium">Patient ID</td>
//               <td className="p-2">{defaultPatient.id}</td>
//               <td className="p-2 font-medium">Age/DOB (YYYYMMDD)</td>
//               <td className="p-2">{defaultPatient.ageDOB || "-"}</td>
//             </tr>
//             <tr className="border-b">
//               <td className="p-2 font-medium">Gender</td>
//               <td className="p-2">{defaultPatient.gender}</td>
//               <td className="p-2 font-medium">Study</td>
//               <td className="p-2 text-blue-600">{defaultPatient.study}</td>
//               <td className="p-2 font-medium">Modality</td>
//               <td className="p-2">{defaultPatient.modality}</td>
//             </tr>
//             <tr>
//               <td className="p-2 font-medium">Referring Doctor</td>
//               <td className="p-2">{defaultPatient.referringDoctor}</td>
//               <td className="p-2 font-medium">Patient Type</td>
//               <td className="p-2">{defaultPatient.patientType}</td>
//               <td className="p-2 font-medium">Date</td>
//               <td className="p-2 text-blue-600">{defaultPatient.date}</td>
//             </tr>
//           </tbody>
//         </table>
//       </div>

//       <select
//         className="border rounded p-2 mb-4 w-full"
//         value={selectedFormat}
//         onChange={(e) => handleFormatChange(e.target.value)}
//       >
//         {formatsList.map((format) => (
//           <option key={format.value} value={format.value}>
//             {format.label}
//           </option>
//         ))}
//       </select>

//       <ReactQuill
//         value={reportContent}
//         onChange={setReportContent}
//         className="bg-white rounded-lg shadow-md mb-4"
//         theme="snow"
//       />

//       <div className="flex gap-2">
//         <button
//           onClick={handleSave}
//           className="bg-green-500 text-white px-4 py-2 rounded shadow hover:bg-green-600"
//         >
//           Save
//         </button>
//         <button
//           onClick={handleSend}
//           className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600"
//         >
//           Send
//         </button>
//         <button
//           onClick={handlePreview}
//           className="bg-gray-500 text-white px-4 py-2 rounded shadow hover:bg-gray-600"
//         >
//           Preview
//         </button>
//       </div>
//     </div>
//   );
// };

// export default PatientReport;


'use client';

import React, { useState, useEffect } from "react";
import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import { OnChangePlugin } from '@lexical/react/LexicalOnChangePlugin';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
// import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary';
import { LexicalErrorBoundary } from '@lexical/react/LexicalErrorBoundary';
import { HeadingNode, QuoteNode } from '@lexical/rich-text';
import { TableCellNode, TableNode, TableRowNode } from '@lexical/table';
import { ListItemNode, ListNode } from '@lexical/list';
import { CodeHighlightNode, CodeNode } from '@lexical/code';
import { AutoLinkNode, LinkNode } from '@lexical/link';
import {
  $getRoot,
  $getSelection,
  $isRangeSelection,
  COMMAND_PRIORITY_CRITICAL,
  FORMAT_TEXT_COMMAND,
  LexicalEditor,
  SELECTION_CHANGE_COMMAND
} from 'lexical';
import { $generateHtmlFromNodes, $generateNodesFromDOM } from '@lexical/html';

// ----- LEXICAL THEME AND NODES CONFIGURATION -----
const theme = {
  ltr: 'ltr',
  rtl: 'rtl',
  placeholder: 'editor-placeholder',
  paragraph: 'editor-paragraph',
};

const editorConfig = {
  namespace: 'MyEditor',
  theme,
  onError(error: Error) {
    throw error;
  },
  nodes: [
    HeadingNode, QuoteNode, ListItemNode, ListNode, CodeHighlightNode, CodeNode,
    AutoLinkNode, LinkNode, TableCellNode, TableNode, TableRowNode
  ]
};

// ----- A SIMPLE TOOLBAR COMPONENT FOR LEXICAL -----
function ToolbarPlugin() {
  const [editor] = useLexicalComposerContext();
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);

  useEffect(() => {
    return editor.registerCommand(
      SELECTION_CHANGE_COMMAND,
      (_payload, newEditor) => {
        newEditor.getEditorState().read(() => {
          const selection = $getSelection();
          if ($isRangeSelection(selection)) {
            setIsBold(selection.hasFormat('bold'));
            setIsItalic(selection.hasFormat('italic'));
          }
        });
        return false;
      },
      COMMAND_PRIORITY_CRITICAL
    );
  }, [editor]);

  return (
    <div className="p-2 border-b bg-gray-50 rounded-t-lg">
      <button
        onClick={() => editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'bold')}
        className={`px-3 py-1 mr-1 border rounded ${isBold ? 'bg-gray-300' : 'bg-white'}`}
        aria-label="Format Bold"
      >
        <b>B</b>
      </button>
      <button
        onClick={() => editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'italic')}
        className={`px-3 py-1 mr-1 border rounded ${isItalic ? 'bg-gray-300' : 'bg-white'}`}
        aria-label="Format Italic"
      >
        <i>I</i>
      </button>
    </div>
  );
}


// ----- YOUR MAIN PATIENT REPORT COMPONENT -----

export interface PatientInfo {
    name: string;
    id: string;
    gender: string;
    study: string;
    referringDoctor: string;
    patientType: string;
    ageDOB: string;
    modality: string;
    date: string;
}

const formatsList = [
    { label: "CT - Brain (Plain)", value: "ct-brain-plain" },
    { label: "MRI - Spine", value: "mri-spine" },
    { label: "Ultrasound - Abdomen", value: "ultrasound-abdomen" },
];

interface PatientReportProps {
    patient?: PatientInfo;
    onBack?: () => void;
}

const PatientReport: React.FC<PatientReportProps> = ({ patient, onBack }) => {
    const [reportTemplates] = useState<Record<string, string>>({
        "ct-brain-plain": `
          <p><b>CLINICAL HISTORY</b></p>
          <p><br></p>
          <p><b>FINDINGS:</b></p>
          <ul>
            <li>No obvious intracranial hemorrhage, mass, mass effect or midline shift.</li>
            <li>The cerebral hemispheres and basal ganglia demonstrate normal attenuation without focal abnormality.</li>
          </ul>
          <p><b>IMPRESSION:</b></p>
          <p>No intracranial hemorrhage, mass, mass effect or midline shift.</p>
        `,
        "mri-spine": "<p><b>CLINICAL HISTORY:</b> Spine MRI normal...</p>",
        "ultrasound-abdomen": "<p><b>CLINICAL HISTORY:</b> Ultrasound abdomen normal...</p>",
    });

    const defaultPatient: PatientInfo = {
        name: patient?.name ?? "Unknown",
        id: patient?.id ?? "-",
        gender: patient?.gender ?? "-",
        study: patient?.study ?? "-",
        referringDoctor: patient?.referringDoctor ?? "Test",
        patientType: patient?.patientType ?? "Outpatient",
        ageDOB: patient?.ageDOB ?? "",
        modality: patient?.modality ?? "-",
        date: patient?.date ?? "",
    };

    const [selectedFormat, setSelectedFormat] = useState<string>("ct-brain-plain");
    const [editorHtml, setEditorHtml] = useState<string>(reportTemplates["ct-brain-plain"]);
    
    // Key for Lexical to force re-initialization when the template changes
    const [editorKey, setEditorKey] = useState(0);

    const handleFormatChange = (formatValue: string) => {
        setSelectedFormat(formatValue);
        const newHtml = reportTemplates[formatValue] ?? "";
        setEditorHtml(newHtml);
        // Change the key to force the Lexical editor to re-render with the new initial state
        setEditorKey(prevKey => prevKey + 1);
    };

    // This function will be called by the OnChangePlugin to update the HTML content
    const handleLexicalChange = (editor: LexicalEditor) => {
        editor.update(() => {
            const htmlString = $generateHtmlFromNodes(editor, null);
            setEditorHtml(htmlString);
        });
    };

    const handleSave = () => {
        console.log("Saving HTML:", editorHtml);
        alert("Report saved! Check the console for the HTML content.");
    };

    const handleSend = () => {
        console.log("Sending HTML:", editorHtml);
        alert("Report sent!");
    };

    const handlePreview = () => {
        const previewWindow = window.open("", "Preview", "width=900,height=700");
        if (previewWindow) {
            previewWindow.document.open();
            previewWindow.document.write(`
              <html>
                <head><title>Report Preview</title></head>
                <body>
                  <h1>Patient Report — ${defaultPatient.name} (${defaultPatient.id})</h1>
                  <div>${editorHtml}</div>
                </body>
              </html>
            `);
            previewWindow.document.close();
        } else {
            alert("Unable to open preview window (popup blocked).");
        }
    };
    
    // Lexical needs an initial state in a specific JSON format.
    // We create it from our HTML template string.
    const initialConfig = {
        ...editorConfig,
        editorState: (editor: LexicalEditor) => {
            // Use the HTML string to initialize the editor
            editor.update(() => {
                const parser = new DOMParser();
                const dom = parser.parseFromString(editorHtml, 'text/html');
                const nodes = $generateNodesFromDOM(editor, dom);
                $getRoot().select();
                $getRoot().clear();
                $getRoot().append(...nodes);
            });
        },
    };

    return (
        <div className="p-6 bg-gray-100">
            {/* Header and Patient Info Table are unchanged... */}
            <div className="w-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg shadow-md p-5 mb-6">
                <h1 className="text-2xl font-bold text-white tracking-wide">
                    Active Study Detail — <span className="italic">{defaultPatient.name}</span>
                </h1>
            </div>

            <select
                className="border rounded p-2 mb-4 w-full"
                value={selectedFormat}
                onChange={(e) => handleFormatChange(e.target.value)}
            >
                {formatsList.map((format) => (
                    <option key={format.value} value={format.value}>
                        {format.label}
                    </option>
                ))}
            </select>

            <div className="bg-white rounded-lg shadow-md mb-4 border">
                <LexicalComposer initialConfig={initialConfig} key={editorKey}>
                    <ToolbarPlugin />
                    <div className="relative">
                        <RichTextPlugin
                            contentEditable={<ContentEditable className="p-4 min-h-[250px] outline-none" />}
                            placeholder={<div className="absolute top-4 left-4 text-gray-400 pointer-events-none">Enter report details...</div>}
                            ErrorBoundary={LexicalErrorBoundary}
                        />
                        <HistoryPlugin />
                        <OnChangePlugin onChange={(editorState, editor) => handleLexicalChange(editor)} />
                    </div>
                </LexicalComposer>
            </div>

            <div className="flex gap-2">
                <button onClick={handleSave} className="bg-green-500 text-white px-4 py-2 rounded shadow hover:bg-green-600">
                    Save
                </button>
                <button onClick={handleSend} className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600">
                    Send
                </button>
                <button onClick={handlePreview} className="bg-gray-500 text-white px-4 py-2 rounded shadow hover:bg-gray-600">
                    Preview
                </button>
            </div>
        </div>
    );
};

export default PatientReport;