import { useState, useEffect } from 'react';

function DemoPage() {
  const [fields, setFields] = useState([
    { name: '', value: '' },
    { name: '', value: '' },
    { name: '', value: '' },
  ]);

  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(saveInput, 1000);
    return () => clearTimeout(timeoutId);
  }, [fields]);

  const saveInput = () => {
    if (fields.every((field) => field.value.trim()!== '')) {
      // Save the input to cache or database here
      console.log('Saving input:', fields);
      setSaving(true);
    }
  };

  const handleInputChange = (event, index) => {
    const { value } = event.target;
    const newFields = [...fields];
    newFields[index].value = value;
    setFields(newFields);
  };

  return (
    <div className="demo-page">
      <h1>Writing Assistant</h1>
      <form>
        {fields.map((field, index) => (
          <div key={index}>
            <label>
              {field.name}:
              <input
                type="text"
                value={field.value}
                onChange={(event) => handleInputChange(event, index)}
              />
            </label>
            <br />
          </div>
        ))}
        {saving && <p>Saving input...</p>}
      </form>
    </div>
  );
}

export default DemoPage;