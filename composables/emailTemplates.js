export const emailHeader = () => {
  return `
    <div style="box-sizing: border-box; width: 100%; background: #ddd; padding: 50px 10px; display: flex; align-items: center; justify-content: center; font-family: Arial, sans-serif; font-size: 16px; line-height: 1.6;">

      <div style="background-color: #fff; padding: 15px; width: 600px; margin: 0 auto; max-width: 95%; box-sizing: border-box;">
  `;
}

export const emailFooter = () => {
  return `

      <div style="border-bottom: 1px solid #ddd; margin: 15px 0;"></div>

      <div style="font-size: 11px; color: #999">Copyright &copy; All rights reserved</div>

      </div>
    </div>
  `;
}

export const emailButton = (link, text, centered) => {
  if (centered) {
    return `<a href="${link}" style="border-radius: 3px; background-color: #0D3E6B; color: #fff; text-decoration: none; text-align: center; padding: 15px 50px; min-width: 285px; display: inline-block; font-weight: bold; font-size: 18px; text-transform: uppercase; ">${text || 'Go'}</a>
    <div style="font-size: 13px; color: #666; margin: 10px 0 30px 0;">If this doesn't work, use the following link: <a href="${link}" style="overflow-wrap: break-word; word-wrap: break-word; -ms-word-break: break-all; word-break: break-all; word-break: break-word;">${link}</a></div>
  `;
  } else {
    return `<a href="${link}" style="border-radius: 3px; background-color: #0D3E6B; color: #fff; text-decoration: none; text-align: center; padding: 15px 50px; min-width: 285px; display: inline-block; font-weight: bold; font-size: 18px; text-transform: uppercase; ">${text || 'Go'}</a>
      <div style="font-size: 13px; color: #666; margin: 10px 0 30px 0;">If this doesn't work, use the following link: <a href="${link}" style="overflow-wrap: break-word; word-wrap: break-word; -ms-word-break: break-all; word-break: break-all; word-break: break-word;">${link}</a></div>
    `;
  }
}