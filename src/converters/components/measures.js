<script>
function gigaconvert()
{
	valin = inEl.value,
	valout = outEl.value,
	inmetric = inmetricEl.value,
	outmetric = outmetricEl.value,
	inm = 0,
	result = 0;
	tool.preventDefault;
	inm = valin;
	if (inmetric == 'nm')
	{
		inm = valin / 1000000000;
	}
	else if (inmetric == 'μm')
	{
		inm = valin / 1000000;
	}
	else if (inmetric == 'mm')
	{
		inm = valin / 1000;
	}
	else if (inmetric == 'cm')
	{
		inm = valin / 100;
	}
	else if (inmetric == 'dm')
	{
		inm = valin / 10;
	}
	else if (inmetric == 'km')
	{
		inm = valin * 1000;
	}
	else if (inmetric == 'in')
	{
		inm = valin * 0.0254;
	}
	else if (inmetric == 'ft')
	{
		inm = valin * 0.3048;
	}
	else if (inmetric == 'yd')
	{
		inm = valin * 0.9144;
	}
	else if (inmetric == 'mi')
	{
		inm = valin * 1609.344;
	}
	else if (inmetric == 'M')
	{
		inm = valin * 1852;
	}
	else if (inmetric == 'lea')
	{
		inm = valin * 1609.344 * 3;
	}

	if (outmetric == 'nm')
	{
		result = inm * 1000000000;
	}
	else if (outmetric == 'μm')
	{
		result = inm * 1000000;
	}
	else if (outmetric == 'mm')
	{
		result = inm * 1000;
	}
	else if (outmetric == 'cm')
	{
		result = inm * 100;
	}
	else if (outmetric == 'dm')
	{
		result = inm * 10;
	}
	else if (outmetric == 'm')
	{
		result = inm;
	}
	else if (outmetric == 'km')
	{
		result = inm / 1000;
	}
	else if (outmetric == 'in')
	{
		result = inm / 0.0254;
	}
	else if (outmetric == 'ft')
	{
		result = inm / 0.3048;
	}
	else if (outmetric == 'yd')
	{
		result = inm / 0.9144;
	}
	else if (outmetric == 'mi')
	{
		result = inm / 1609.344;
	}
	else if (outmetric == 'M')
	{
		result = inm / 1852;
	}
	else if (outmetric == 'lea')
	{
		result = inm / 1609.344 / 3;
	}
	outEl.value = GIGA.round(result,9,true);
	gtag('event', document.title.replace(/([^-]+).*?$/, '$1').replace(/\sConverter\s$/, '').replace(/\s$/, ''), { 'event_category': 'Used Converter' });
	return false;
}
var tool = document.getElementById('converter'),
	inEl = document.getElementById('unitfrom'),
	outEl = document.getElementById('unitto'),
	valin = inEl.value,
	valout = outEl.value,
	inmetricEl = document.getElementById('unitfromadd'),
	outmetricEl = document.getElementById('unittoadd'),
	inmetric = inmetricEl.value,
	outmetric = outmetricEl.value,
	inm = 0,
	result = 0;
	inEl.addEventListener('keyup', gigaconvert);
	inEl.addEventListener('change', gigaconvert);
	inmetricEl.addEventListener('change', gigaconvert);
	outmetricEl.addEventListener('change', gigaconvert);
</script>
