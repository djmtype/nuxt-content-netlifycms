<template>
  <section>
    <h1><ContentSlot :use="$slots.default" unwrap="p" /></h1>
		<slot name="description"/>
  </section>
</template>
