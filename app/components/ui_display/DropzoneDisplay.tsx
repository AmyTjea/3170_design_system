import React, { useState } from 'react'
import { Dropzone, DropzoneEmptyState, DropzoneContent } from '../ui/dropzone'
import { UploadIcon } from 'lucide-react';

export default function DropzoneDisplay() {

  const [files, setFiles] = useState<File[] | undefined>();
  const handleDrop = (files: File[]) => { console.log(files); setFiles(files); };
  return (
    <div className="flex flex-col items-center p-8 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-foreground mb-8">Dropzone</h1>
                  <Dropzone
                    onDrop={(files) => {
                      handleDrop(files);
                    }}
                    onError={console.error}
                    accept={{ ".py": [] }}
                    maxFiles={1}
                    // className="border-2 border-dashed border-muted-foreground rounded-md transition-colors hover:border-primary focus:border-primary"
                  >
                    <DropzoneEmptyState>
                      <div className="flex flex-col items-center w-full py-4">
                        <UploadIcon
                          size={32}
                          className="mb-2 text-muted-foreground"
                        />
                        <div className="text-center w-full">
                          <p className="font-medium text-sm mb-1">
                            Upload a Python file
                          </p>
                          <p className="text-muted-foreground text-xs mb-0.5">
                            Drag and drop or click to select
                          </p>
                          <p className="text-muted-foreground text-xs">
                            Accepted: <span className="font-mono">.py</span>
                          </p>
                        </div>
                      </div>
                    </DropzoneEmptyState>
                    <DropzoneContent />
                  </Dropzone>
    </div>)
}
