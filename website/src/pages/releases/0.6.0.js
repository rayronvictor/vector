import React from 'react';

import ReleaseNotes from '@site/src/components/ReleaseNotes';

function ReleaseNotesPage() {
  const version = "0.6.0";

  return <ReleaseNotes version={version} />;
}

export default ReleaseNotesPage;